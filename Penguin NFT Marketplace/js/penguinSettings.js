var colors = Object.values(allColors())

var defaultDNA = {
    "headColor" : 10,
    "bellyColor" : 13,
    "faceColor" : 13,
    "handColor" : 10,
    
    //attributes
    "eyesShape" : 1,
    "decorationPattern" : 1,
    "decorationMidcolor" : 13,
    "decorationSidescolor" : 13,
    "animation" :  1,
    "lastNum" :  1,
    }

// when page load
$( document ).ready(function() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnabelly').html(defaultDNA.bellyColor);
  $('#dnaface').html(defaultDNA.faceColor);
  $('#dnahand').html(defaultDNA.handColor);
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderPenguin(defaultDNA)
});

function getDna(){
    var dna = ''
    dna += $('#dnabody').html()
    dna += $('#dnabelly').html()
    dna += $('#dnaface').html()
    dna += $('#dnahand').html()
    dna += $('#dnashape').html()
    dna += $('#dnadecoration').html()
    dna += $('#dnadecorationMid').html()
    dna += $('#dnadecorationSides').html()
    dna += $('#dnaanimation').html()
    dna += $('#dnaspecial').html()

    
    return parseInt(dna)
}

function defaultPenguin() {
  $('#dnabody').html(defaultDNA.headColor);
  $('#dnabelly').html(defaultDNA.bellyColor);
  $('#dnaface').html(defaultDNA.faceColor);
  $('#dnahand').html(defaultDNA.handColor);
  $('#dnashape').html(defaultDNA.eyesShape)
  $('#dnadecoration').html(defaultDNA.decorationPattern)
  $('#dnadecorationMid').html(defaultDNA.decorationMidcolor)
  $('#dnadecorationSides').html(defaultDNA.decorationSidescolor)
  $('#dnaanimation').html(defaultDNA.animation)
  $('#dnaspecial').html(defaultDNA.lastNum)

  renderPenguin(defaultDNA)
}

function randomPenguin(){
    var randomDNA = {
      "headColor" : Math.floor(Math.random() * 89) + 10,
      "bellyColor" : Math.floor(Math.random() * 89) + 10,
      "faceColor" : Math.floor(Math.random() * 89) + 10,
      "handColor" : Math.floor(Math.random() * 89) + 10,
      "eyesShape" : Math.floor(Math.random() * 7) + 1,
      "decorationPattern" : Math.floor(Math.random() * 4) + 1,
      "decorationMidcolor" : Math.floor(Math.random() * 6) + 1,
      "decorationSidescolor" : Math.floor(Math.random() * 89) + 10,
      "animation" : Math.floor(Math.random() * 4) + 1,
      "lastNum" : 1,
    }
    $('#dnabody').html(randomDNA.headColor);
    $('#dnabelly').html(randomDNA.bellyColor);
    $('#dnaface').html(randomDNA.faceColor);
    $('#dnahand').html(randomDNA.handColor);
    $('#dnashape').html(randomDNA.eyesShape);
    $('#dnadecoration').html(randomDNA.decorationPattern);
    $('#dnadecorationMid').html(randomDNA.decorationMidcolor);
    $('#dnadecorationSides').html(randomDNA.decorationSidescolor);
    $('#dnaanimation').html(randomDNA.animation);
    renderPenguin(randomDNA);
}


function renderPenguin(dna){

    headColor(colors[dna.headColor],dna.headColor)
    $('#bodycolor').val(dna.headColor)

    bellyColor(colors[dna.bellyColor],dna.bellyColor)
    $('#bellycolor').val(dna.bellyColor)

    faceColor(colors[dna.faceColor],dna.faceColor)
    $('#facecolor').val(dna.faceColor)

    handColor(colors[dna.handColor],dna.handColor)
    $('#handcolor').val(dna.handColor)

    eyeVariation(dna.eyesShape)
    $('#eyeshape').val(dna.eyesShape)

    decorationVariation(dna.decorationPattern)
    $('#patternshape').val(dna.decorationPattern)
    
    patternColorMid(colors[dna.decorationMidcolor],dna.decorationMidcolor)
    $('#patterncolormid').val(dna.decorationMidcolor)

    patternColorSides(colors[dna.decorationSidescolor],dna.decorationSidescolor)
    $('#patterncolorsides').val(dna.decorationSidescolor)

    animationVariation(dna.animation)
    $('#animation').val(dna.animation)


// Changing penguin colors

$('#bodycolor').change(()=>{
    var colorVal = $('#bodycolor').val()    
    headColor(colors[colorVal],colorVal)
})

$('#bellycolor').change(()=>{
    var colorVal = $('#bellycolor').val()
    bellyColor(colors[colorVal],colorVal)
})

$('#facecolor').change(()=>{
    var colorVal = $('#facecolor').val()
    faceColor(colors[colorVal],colorVal)
})

$('#handcolor').change(()=>{
    var colorVal = $('#handcolor').val()
    handColor(colors[colorVal],colorVal)
})

$('#patterncolormid').change(()=>{
    var colorVal = $('#patterncolormid').val()
    patternColorMid(colors[colorVal],colorVal)
})

$('#patterncolorsides').change(()=>{
    var colorVal = $('#patterncolorsides').val()
    patternColorSides(colors[colorVal],colorVal)
    console.log("1")
})

//Eye Shape

$('#eyeshape').change(()=>{
    var shape = parseInt($('#eyeshape').val())
    eyeVariation(shape)
})

$('#patternshape').change(()=>{
    var pattern = parseInt($('#patternshape').val())
    decorationVariation(pattern)
})

$('#animation').change(()=>{
    var animation = parseInt($('#animation').val())
    animationVariation(animation)
})

}



