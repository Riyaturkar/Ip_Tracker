 const lookupBtn=document.querySelector(".lookup-btn");
 const ipDisplay =document.querySelector(".ip-display");
 const locationDisplay =document.querySelector(".location-display");
 const geoDisplay = document.querySelector(".geo-display");
 const timezone = document.querySelector(".timezone");
 const loader =document.querySelector(".loader-main");
 const det = document.querySelector(".details");
const back = document.querySelector(".Back");
 
 lookupBtn.addEventListener("click",()=>{
     loader.style.display="flex";
     det.style.display="none";
    axios.get("https://ipapi.co/json/").then((response)=>{
        loader.style.display="none";
        det.style.display="block";

         ipDisplay.textContent=`Ip Address :  ${response.data.ip}`;
        geoDisplay.textContent=`Geo Display : ${response.data.latitude},${response.data.longitude}`;
         locationDisplay.textContent=`Location : ${response.data.city},${response.data.country_name},${response.data.region}`;
       timezone.textContent=`Time Zone : ${response.data.timezone}`;
  });
  back.addEventListener("click",()=>{
    
    ipDisplay.textContent=`Ip Address  `;
        geoDisplay.textContent=`Geo Display `;
         locationDisplay.textContent=`Location `;
       timezone.textContent=`Time Zone `;

    
    
 });

 });

