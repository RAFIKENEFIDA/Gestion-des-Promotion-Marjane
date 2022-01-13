import acceuil from "../pagesDashboard/responsableRayon/acceuil.js";



 const route=(route)=>{
     
    const routes = [
        { path: "acceuil", view: acceuil },
        
    ];
    

    let findView = routes.find(element => element.path === route);

    
     return  findView.view.getHtml();
   
}
export default route