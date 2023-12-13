let arcade_price=9;
let advanced_price=12;
let pro_price=15;

let online_service_price=1;
let larger_storage_price=2;
let customizable_profile=2;

let total_cost=0;

function go_to_form(id)
{
    console.log("reached")

    for(let i=0;i<4;i++)
    document.getElementsByClassName("step_number")[i].style.backgroundColor="transparent";

    document.getElementsByClassName("step_number")[id-1].style.backgroundColor="hsl(228, 100%, 84%)";

    document.getElementById("form-1").classList.add("hidden")
    document.getElementById("form-2").classList.add("hidden")
    document.getElementById("form-3").classList.add("hidden")
    document.getElementById("form-4").classList.add("hidden")

    document.getElementById(`form-${id}`).classList.remove("hidden")

}

