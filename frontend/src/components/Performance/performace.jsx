import React from "react";
import BarChart from "react-bar-chart";
var data = [
    // { text: 'Man', value: 500 },
    // { text: 'Woman', value: 300 }
];

const margin = { top: 20, right: 20, bottom: 30, left: 40 };

 class Perforamce extends React.Component {
  
   constructor(props) {
     super(props);
    
    //  this.state = { width: 500 };
     this.handleBarClick = this.handleBarClick.bind(this)
     this.populateData = this.populateData.bind(this)
   }
   populateData(){
    //  debugger
     var corrections = this.props.allCorrections;
      // data = [];
     for(var i = 0;i<corrections.length;i++){
       var date = new Date(corrections[i].date);
       var numErrors = corrections[i].correcttext.length
            var obj = {text:date,value:numErrors}
            data.push(obj)
       console.log(data)
     }
    //  return data;
   }
   
   componentDidMount() {
     window.onresize = () => {
       this.setState({ width: this.refs.root.offsetWidth });
     };
   }
   handleBarClick(element, id) {
     console.log(`The bin ${element.text} with id ${id} was clicked`);
   }
   render() {
      //  debugger
     this.populateData()
     return <div ref="root">
         <div style={{ width: "50%" }}>
         <BarChart ylabel="Quantity" width={300} height={500} margin={margin} data={data} onBarClick={this.handleBarClick} />
         </div>
       </div>;
   }
 }

 export default Perforamce;