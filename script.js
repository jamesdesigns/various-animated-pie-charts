		
		var obj = {
      values: [15, 50, 20, 85, 30],
      colors: ['#133b5e', '#2168a6', '#2d95ec', '#6cb3f1', '#acd4f7'],
      animation: true, // Takes boolean value & default behavious is false
      animationSpeed: 1, // Time in miliisecond & default animation speed is 20ms
      fillTextData: true, // Takes boolean value & text is not generate by default 
      fillTextColor: '#fff', // For Text colour & default colour is #fff (White)
      fillTextAlign: 1.30, // for alignment of inner text position i.e. higher values gives closer view to center & default text alignment is 1.85 i.e closer to center
      fillTextPosition: 'inner', // 'horizontal' or 'vertical' or 'inner' & default text position is 'horizontal' position i.e. outside the canvas
      doughnutHoleSize: 60, // Percentage of doughnut size within the canvas & default doughnut size is null
      doughnutHoleColor: '#fff', // For doughnut colour & default colour is #fff (White)
      offset: 1, // Offeset between two segments & default value is null
      pie: 'normal', // if the pie graph is single stroke then we will add the object key as "stroke" & default is normal as simple as pie graph
      isStrokePie: { 
        stroke: 20, // Define the stroke of pie graph. It takes number value & default value is 20
        overlayStroke: true, // Define the background stroke within pie graph. It takes boolean value & default value is false
        overlayStrokeColor: '#eee', // Define the background stroke colour within pie graph & default value is #eee (Grey)
        strokeStartEndPoints: 'Yes', // Define the start and end point of pie graph & default value is No
        strokeAnimation: true, // Used for animation. It takes boolean value & default value is true
        strokeAnimationSpeed: 40, // Used for animation speed in miliisecond. It takes number & default value is 20ms
        fontSize: '60px', // Used to define text font size & default value is 60px
        textAlignement: 'center', // Used for position of text within the pie graph & default value is 'center'
        fontFamily: 'Arial', // Define the text font family & the default value is 'Arial'
        fontWeight: 'bold' //  Define the font weight of the text & the default value is 'bold'
      }
      };

var obj2 = {
      values: [10, 30, 20, 15, 35],
      colors: ['#133b5e', '#2168a6', '#2d95ec', '#6cb3f1', '#acd4f7'],
      animation: true,
      animationSpeed: 5,
      fillTextData: true,
      fillTextColor: '#fff',
      fillTextAlign: 1.50, 
      fillTextPosition: 'inner',
      doughnutHoleSize: null,
      doughnutHoleColor: '#fff',
      offset: 1
      };

var obj3 = {
      pie: 'stroke',
      values: [85],
      colors: ['#E91E63'],
      isStrokePie: {
        stroke: 20,
        strokeStartEndPoints: 'Yes',
        strokeAnimation: true,
        strokeAnimationSpeed: 20,
        fontSize: '40px',
        textAlignement: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold'
      }
      };

var obj4 = {
      pie: 'stroke',
      values: [75],
      colors: ['#E91E63'],
      isStrokePie: {
        stroke: 20,
        overlayStroke: true,
        overlayStrokeColor: '#eee',
        strokeStartEndPoints: 'Yes',
        strokeAnimation: true,
        strokeAnimationSpeed: 20,
        fontSize: '40px',
        textAlignement: 'center',
        fontFamily: 'Arial',
        fontWeight: 'bold'
      }
      };

//Generate myCanvas		
generatePieGraph('myCanvas', obj);

//Generate myCanvas2
generatePieGraph('myCanvas2', obj2);

//Generate myCanvas3
generatePieGraph('myCanvas3', obj3); 

//Generate myCanvas4
generatePieGraph('myCanvas4', obj4);	