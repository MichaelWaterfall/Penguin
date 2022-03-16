//Random color
function getColor() {
    var randomColor = Math.floor(Math.random() * 16777215).toString(16);
    return randomColor
}

function genColors(){
    var colors = []
    for(var i = 10; i < 99; i ++){
      var color = getColor()
      colors[i] = color
    }
    return colors
}

//This function code needs to modified so that it works with Your cat code.

function headColor(color, code) {
    $('.penguin-bottom, .penguin-top').css('background', '#' + color)  //This changes the color of the cat
    $('#headcode').html('code: '+code) //This updates text of the badge next to the slider
    $('#dnabody').html(code) //This updates the body color part of the DNA that is displayed below the cat
}
function bellyColor(color, code) {
    $('.belly').css('background', '#' + color)
    $('#bellycode').html('code: '+code)
    $('#dnabelly').html(code)
}
function faceColor(color, code) {
    $('.left-cheek, .right-cheek').css('background', '#' + color)
    $('#facecode').html('code: '+code)
    $('#dnaface').html(code)
}
function handColor(color, code) {
    $('.left-hand, .right-hand').css('background', '#' + color)
    $('#handcode').html('code: '+code)
    $('#dnahand').html(code)
    console.log(color)
    console.log(code)
}

function patternColorMid(color, code) {
    $('.pattern').css('background', '#' + color)
    $('#decorationMidcolor').html('code: '+code)
    $('#dnadecorationMid').html(code)
    
}

function patternColorSides(color, code) {
    $('.pattern-right, .pattern-left').css('background', '#' + color)
    $('#decorationSidescolor').html('code: '+code)
    $('#dnadecorationSides').html(code)
    
}

//###################################################
//Functions below will be used later on in the project
//###################################################
function eyeVariation(num) {

    $('#dnashape').html(num)
    switch (num) {
        case 1:
            normalEyes()
            $('#eyeName').html('Basic')
            console.log("Basic")
            break
        case 2:
            normalEyes()
            $('#eyeName').html('Down')
            eyesType1()
            console.log("Down")
            break
        case 3:
            normalEyes()
            $('#eyeName').html('Up')
            eyesType2()
            break
        case 4:
            normalEyes()
            $('#eyeName').html('Tired')
            eyesType3()
            break
        case 5:
            normalEyes()
            $('#eyeName').html('Up-Down')
            eyesType4()
            break
        case 6:
            normalEyes()
            $('#eyeName').html('Cross-Eyed')
            eyesType5()
            break
        case 7:
            normalEyes()
            $('#eyeName').html('Far-eyes')
            eyesType6()
            break
    }
}



function normalEyes() {
    $('.left-eye, .right-eye').find('div').css('top', '25%').css('left', '15%').css('width', '35%').css('height', '35%')
    
}   

function eyesType1() {
    $('.left-eye, .right-eye').find('div').css('top', '50%',).css('left', '30%')
    console.log("eyesType1")
}

function eyesType2() {
    $('.left-eye, .right-eye').find('div').css('top', '10%').css('left', '30%')
}

function eyesType3() {
    $('.left-eye, .right-eye').find('div').css('width', '69%').css('height', '24%')
}

function eyesType4() {
    $('.left-eye').find('div').css('top', '10%').css('left', '30%')
    $('.right-eye').find('div').css('top', '50%').css('left', '30%')
}

function eyesType5() {
    $('.right-eye').find('div').css('top', '25%').css('left', '-8%')
    $('.left-eye').find('div').css('top', '25%').css('left', '74%')
}

function eyesType6() {
    $('.right-eye').find('div').css('top', '25%').css('left', '74%')
    $('.left-eye').find('div').css('top', '25%').css('left', '-8%')
}

function decorationVariation(num) {
    $('#dnadecoration').html(num)
    switch (num) {
        case 1:
            $('#decorationPattern').html('Clear')
            normalDecoration()
            break
        case 2:
            normalDecoration()
            $('#decorationPattern').html('Three-line')
            pattern1()
            break
        case 3:
            normalDecoration()
            $('#decorationPattern').html('One-line')
            pattern2()
            break
        case 4:
            normalDecoration()
            $('#decorationPattern').html('Two-line')
            pattern3()
            break
        case 5:
            normalDecoration()
            $('#decorationPattern').html('T')
            pattern4()
            break
        case 6:
            normalDecoration()
            $('#decorationPattern').html('Cross')
            pattern5()
            break
        case 7:
            normalDecoration()
            $('#decorationPattern').html('X')
            pattern6()
            break

    }
}

function animationVariation(num) {
    $('#dnaanimation').html(num);
    switch (num) {
        case 1:
            resetAnimation()
            $('#animationName').html('None')
            
            break
        case 2:
            resetAnimation()
            $('#animationName').html('Waving')
            animationType1()
            break
        case 3:
            resetAnimation()
            $('#animationName').html('Jumping')
            animationType2()
            break
        case 4:
            resetAnimation()
            $('#animationName').html('Shaking')
            animationType3()
            break
        case 5:
            resetAnimation()
            $('#animationName').html('Dancing')
            animationType4()
            break
        case 6:
            resetAnimation()
            $('#animationName').html('Happy Feet')
            animationType5()
            break
    }
}



function animationType1() {
    resetAnimation()
    $('.right-hand').addClass('wave');
}

function animationType2() {
    $('.penguin').addClass('jump')    
}

function animationType3() {
    $('.penguin').addClass('shake')
}

function animationType4() {
    $('.penguin').addClass('danceBody')
    $('.right-hand').addClass('danceHandR')
    $('.left-hand').addClass('danceHandL')
}

function animationType5() {
    $('.right-feet').addClass('happyFeetR')
    $('.left-feet').addClass('happyFeetL')
}

function resetAnimation() {
    $('.right-hand').removeClass('wave');
    $('.penguin').removeClass('jump')
    $('.penguin').removeClass('shake')
    $('.penguin').removeClass('danceBody')
    $('.right-hand').removeClass('danceHandR')
    $('.left-hand').removeClass('danceHandL')
    $('.right-feet').removeClass('happyFeetR')
    $('.left-feet').removeClass('happyFeetL')
}



function normalDecoration() {
    //Remove all style from other decorations
    //In this way we can also use normalDecoration() to reset the decoration style
    $('.pattern, .pattern-left, .pattern-right').css('visibility', 'hidden').css('height', '50px').css('width', '16px').css('top', '116px')
    $('.pattern').css('left', '67px')
    $('.pattern-left').css('left', '40px')
    $('.pattern-right').css('left', '95px')
    $('.pattern, .pattern-right').css('transform', 'rotate(0deg)')
    //console.log("Clear")
}

function pattern1() {
    $('.pattern, .pattern-left, .pattern-right').css('visibility', 'visible')
    $('.pattern, .pattern-left, .pattern-right').css('background', 'red') 
    //console.log("Basic")
}

function pattern2 () {
    $('.pattern').css('visibility', 'visible')
    console.log("One-line")
}

function pattern3 () {
    $('.pattern').css('visibility', 'visible').css('left', '50px')
    $('.pattern-right').css('visibility', 'visible').css('left', '85px')
}

function pattern4() {
    $('.pattern').css('visibility', 'visible').css('left', '67px')
    $('.pattern-right').css('visibility', 'visible').css('height', '16px').css('width', '50px').css('left', '51px')
}

function pattern5() {
    $('.pattern').css('visibility', 'visible').css('left', '67px')
    $('.pattern-right').css('visibility', 'visible').css('height', '16px').css('width', '50px').css('left', '51px').css('top', '127px')
}

function pattern6() {
    $('.pattern').css('visibility', 'visible').css('left', '67px')
    $('.pattern-right').css('visibility', 'visible').css('height', '16px').css('width', '50px').css('left', '51px').css('top', '133px')
    $('.pattern, .pattern-right').css('transform', 'rotate(45deg)')
}

