'use strict';
const commonHeaders=require("../../headers/commonHeaders")
const fetchList=(event)=>{
    const transformedData= [{
        id:"1",
        name:"Emirates",
        flightId:"EK-501",
        imgSrc:"https://ibb.co/qmDdg6R",        
        time:[
            {   
                id:"11",
                departureTime:"2:00",
                arrivalTimer:"5:00"
            },
            {
                id:"12",
                departureTime:"4:00",
                arrivalTimer:"7:00"
            }
        ],
        economyPrice:"4,000",
        firstClassPrice:"15,000",
        businessClass:"10,000"
    },{
        id:"2",
        name:"Indigo",
        flightId:"EK-502",
        imgSrc:"https://ibb.co/qmDdg6R",        
        time:[
            {
                id:"13",
                departureTime:"11:00",
                arrivalTimer:"15:00"
            },
            {
                id:"14",
                departureTime:"12:00",
                arrivalTimer:"14:00"
            },
            {
                id:"15",
                departureTime:"12:38",
                arrivalTimer:"4:00"
            }
        ],
        economyPrice:"4,500",
        firstClassPrice:"15,600",
        businessClass:"12,000"
    },{
        id:"3",
        flightId:"EK-503",
        name:"Spice Jet",
        imgSrc:"https://ibb.co/qmDdg6R",        
        time:[
            {
                id:"16",
                departureTime:"2:00",
                arrivalTimer:"5:00"
            },
            {
                id:"17",
                departureTime:"14:00",
                arrivalTimer:"5:00"
            }
        ],
        economyPrice:"5,000",
        firstClassPrice:"16,000",
        businessClass:"9,000"
    },{
        id:"4",
        name:"Air India",
        flightId:"EK-504",
        imgSrc:"https://ibb.co/qmDdg6R",        
        time:[
            {
                id:"18",
                departureTime:"3:00",
                arrivalTimer:"6:00"
            },
            {
                id:"19",
                departureTime:"4:00",
                arrivalTimer:"8:00"
            }
        ], 
        economyPrice:"4,000",
        firstClassPrice:"12,000",
        businessClass:"6,000"
    }]        



    return {
        statusCode: 200,
        headers: commonHeaders,
        body: JSON.stringify(
            {
                code: 200,
                data: transformedData,
            },
            null,
            2
        )
    }


}


module.exports.handler = async (event) => {
 
    // const path = event.requestContext.path;
    // const method = event.requestContext.httpMethod;
    // var pathArray = path.split('/').filter(String);
    return fetchList();

    

}