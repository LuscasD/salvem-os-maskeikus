var motivos = [
    " Eles são perfeitos",
    "Gostam de Brincar",
    "Até praticam macaquices",
    "Os macacos são fofinhos",
      "eles gostam de meter a banana na boca"
  ];
  
  var imagens = [ "https://media.istockphoto.com/id/944271706/pt/foto/young-chimpanzee-sitting-simia-troglodytes-in-front-of-a-white-background.jpg?s=612x612&w=0&k=20&c=tVy-VkVaOmM8NY03u6PnkhGSZF9Z6soDSW8YdcmiulY=",
    "https://media.istockphoto.com/id/1201143861/pt/foto/celebes-crested-macaque-with-open-mouth-close-up-portrait.jpg?s=612x612&w=0&k=20&c=isJkSJepGBAOT2-RKifNotrVNfpARIFpQTpJfpxFsuI=",
    "https://i.pinimg.com/236x/8a/1f/6f/8a1f6ffdd68460671d50e63f698c7a8d.jpg",
    "https://i.pinimg.com/236x/bd/c1/c3/bdc1c3a8cd6bd6b78c6a181ca3f68108.jpg",
    "https://media.gettyimages.com/id/171572381/pt/foto/macaco-capuchinho-%C3%A1frica-do-sul.jpg?s=612x612&w=gi&k=20&c=cxoCY8UKTK-pBbuNX7ea-8J8FJ1kNk44vXDdplLSrl4=",
    "https://st.depositphotos.com/1008660/1520/i/450/depositphotos_15209795-stock-photo-capuchin-monkey.jpg" 
                 
  ];
  
  var i = 0;
  function proximo() {  document.getElementById("album").src = imagens[i];
      document.getElementById("texto").innerHTML = motivos[i];
      
      i++;  
     if(i>4){
       i=0;
     }
  }