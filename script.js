var chart = d3.select("#chart");


// Load in svg Illustrator file
d3.xml("./wheel.svg").then(data2 => {
    chart.node().append(data2.documentElement);

    var glyph = d3.select("#glyph");

    var perception = glyph.select("#perception_00000095311265707325364780000014891283517951762088_");
    var gestalt = glyph.select("#gestalt");
    var memory = glyph.select("#memory_00000082333485991081718730000000017604332086728602_");
    var schema = glyph.select("#schema");
    var narrative = glyph.select("#narrative");

    var perceptionText = d3.select("#perceptionText")
    var gestaltText = d3.select("#gestaltText")
    var taskText = d3.select("#taskText");
    var tufteText = d3.select("#tufteText");
    var memText = d3.select("#memText");
    var schemaText = d3.select("#schemaText");
    var storyText = d3.select("#storyText");
    var narrText = d3.select("#narrText");

    perceptionText.attr("opacity", 0);
    gestaltText.attr("opacity", 0);
    taskText.attr("opacity", 0);
    tufteText.attr("opacity", 0);
    memText.attr("opacity", 0);
    schemaText.attr("opacity", 0);
    storyText.attr("opacity", 0);
    narrText.attr("opacity", 0);

    perception.attr("opacity", .15);
    gestalt.attr("opacity", .15);
    memory.attr("opacity", .15);
    schema.attr("opacity", .15);
    narrative.attr("opacity", .15);


    function decreaseOpacity() {
        perception.attr("opacity", .15);
        gestalt.attr("opacity", .15);
        memory.attr("opacity", .15);
        schema.attr("opacity", .15);
        narrative.attr("opacity", .15);

        perceptionText.attr("opacity", 0);
        gestaltText.attr("opacity", 0);
        taskText.attr("opacity", 0);
        tufteText.attr("opacity", 0);
        memText.attr("opacity", 0);
        schemaText.attr("opacity", 0);
        storyText.attr("opacity", 0);
        narrText.attr("opacity", 0);
    }

    d3.select("#perceptionbutton").on("click", function () {
        decreaseOpacity();
        perception.attr("opacity", 1);
        perceptionText.attr("opacity", 1);
        document.getElementById("wheel").style.transform = 'rotate(0deg)';
    })

    d3.select("#gestaltbutton").on("click", function () {
        decreaseOpacity();
        gestaltText.attr("opacity", 1);
        gestalt.attr("opacity", 1);
        document.getElementById("wheel").style.transform = 'rotate(-45deg)';
    })

    d3.select("#taskbutton").on("click", function () {
        decreaseOpacity();
        taskText.attr("opacity", 1);
        gestalt.attr("opacity", 1);
        perception.attr("opacity", 1);
        document.getElementById('wheel').style.transform = 'rotate(-90deg)'
    })

    d3.select("#tuftebutton").on("click", function () {
        decreaseOpacity();
        tufteText.attr("opacity", 1);
        perception.attr("opacity", 1);
        memory.attr("opacity", 1);
        document.getElementById('wheel').style.transform = 'rotate(-135deg)'
    })

    d3.select("#memorybutton").on("click", function () {
        decreaseOpacity();
        memText.attr("opacity", 1);
        memory.attr("opacity", 1);
        document.getElementById('wheel').style.transform = 'rotate(-180deg)'
    })

    d3.select("#schemabutton").on("click", function () {
        decreaseOpacity();
        schemaText.attr("opacity", 1);
        schema.attr("opacity", 1);
        document.getElementById('wheel').style.transform = 'rotate(-225deg)'
    })

    d3.select("#storybutton").on("click", function () {
        decreaseOpacity();
        storyText.attr("opacity", 1);
        gestalt.attr("opacity", 1);
        perception.attr("opacity", 1);
        document.getElementById('wheel').style.transform = 'rotate(-270deg)'
    })

    d3.select("#narrativebutton").on("click", function () {
        decreaseOpacity();
        narrText.attr("opacity", 1);
        narrative.attr("opacity", 1);
        document.getElementById('wheel').style.transform = 'rotate(-315deg)'
    })

});


