let lansiReducer = function(lansi = {}, action){
   console.log('This is from lansiReducer----'+action.type)
switch (action.type){
  case 'CHANGE-LANSI-NAME':
      return {
          name:action.text,
          id:action.id
      }  
   case 'ADD-LANSI':

      return {
          name:action.text,
          id:Math.round(Math.random()*100)
      } 
default:
    return lansi;
}

}

export default lansiReducer