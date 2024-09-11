function addClass(){
    document.querySelector("div").classList.add("plus");
    document.querySelector("div").classList.remove("minse");
    }
    
    
    
    function addClass1(){
    document.querySelector("div").classList.add("minse");
    document.querySelector("div").classList.remove("plus");
    }
    
    document.querySelector(".pluBtn").onclick=addClass;
    document.querySelector(".minBtn").onclick=addClass1;