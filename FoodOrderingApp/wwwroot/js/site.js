﻿// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.

/*let ApiUrl = "/images/foodDisplay/food1.jpeg"*/
let ApiUrl = "https://forkify-api.herokuapp.com/api/v2/recipes"
let ApiKey = "36d4a930-ed00-40f8-8180-1e9c5e75536b"
async function GetRecipes(recipeName,id,isAllShow) {
    let resp = await fetch(`${ApiUrl}?search=${recipeName}&key=${ApiKey}`);
    let result = await resp.json();
    console.log(result);
    let Recipes = isAllShow ? result.data.recipes : result.data.recipes.slice(1, 7);
    showRecipes(Recipes, id);
}

function showRecipes(recipes, id) {
    $.ajax({
        contentType: "application/json; charset=utf-8",
        dataType: 'html',
        type: 'POST',
        url: '/Recipe/GetRecipeCard',
        data: JSON.stringify(recipes),
        success: function (htmlResult) {
            $('#' + id).html(htmlResult);
        }
    });
}

let apiURL = "https://forkify-api.herokuapp.com/api/v2/recipes"
let apikey = "5ed6604591c37cdc054bc886"
async function getOrderRecipe(id, showId) {
    
    let resp = await fetch(`${apiURL}/${id}?key=${apikey}`);
    let result = await resp.json();
    //console.log(result);
    let recipe = result.data.recipe;
    showOrderRecipeDetails(recipe, showId);
}
function showOrderRecipeDetails(orderRecipeDetails, showId) {
   // console.log(orderRecipeDetails)
    $.ajax({
        url: '/Recipe/ShowOrder',
        data: orderRecipeDetails,
        dataType: 'html',
        type: 'POST',
      
        success: function (htmlResult) {
            //console.log(htmlResult);
            $("#" + showId).html(htmlResult);
        }
            
        
    });
}