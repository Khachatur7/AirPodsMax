$(document).ready(function () {
    let menu_window = $("#menu_window")
    let burger = $("#burger")
    let li = [...menu_window.children()]
    console.log(li);
    let allColors = ["white", "black", "red", "green", "blue"]
    let colors = [...$(".ap-colors").children()]
    let replacementName;
    let comp_img = $("#comp_img")
    let smart_case = $("#smart-case")
    let main_img = $("#main_img")
    let header = $(".header")

    colors.map(el => {

        $(el).on("click touchscreen", function () {
            let haveColors = []
            for (const el of colors) {
                haveColors.push($(el).attr("id"))
            }

            allColors.forEach(el => haveColors.includes(el) ? console.log(haveColors) : replacementName = el)

            let ap_color
            let color = $(el).attr("id")
            smart_case.attr("src", `images/ap_smartcase_${color}.jpg`)
            comp_img.attr("src", `images/ap_design_${color}.jpg`)
            main_img.attr("src", `images/ap_max_${color}.png`);
            switch (color) {
                case "white":
                    ap_color = "#FAFAFA"
                    break;
                case "black":
                    ap_color = "#B6B6B6"
                    break;
                case "red":
                    ap_color = "#F3D6D1"
                    break;
                case "green":
                    ap_color = "#DDEAD9"
                    break;
                case "blue":
                    ap_color = "#CADBEB"
                    break;
                default:
                    break;
            }
            header.css({
                'background': `linear-gradient(180deg, ${ap_color} 0%, #ebebeb00 100%)`
            })
            $(el).attr("id", replacementName)
            $(el).attr("src", `images/ap_select_${replacementName}.png`)
        })
    })
    burger.on("click", function () {
        menu_window.toggleClass("flex");
        menu_window.toggleClass("none");
    })
    li.map(child => {
        $(child).on("click", function () {
            menu_window.toggleClass("flex");
            menu_window.toggleClass("none");
            $(".checkbox").prop("checked",false)
        })
    })
  

});