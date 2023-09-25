// Récupération d'utilisateur aléatoire

const url = "https://randomuser.me/api?results=50&nat=FR";


// Transformation de la requete de l'ulr en .JSON
fetch(url)
    .then(response => response.json())
    .then(data => 
        {   
            // donnée des utilsateurs
            afficheData(data);
        })

    .catch(error => console.error('Erreur :', error));


function afficheData(donnees) 
{

    const user = donnees.results;


    // declaration des variables 
    let addcolonne = "<tbody>";
    let gender = "";
    let genderContenant = "";

    for (let index = 0; index < user.length; index++) 
    {

        // prise en compte du genre (H/F)
        gender = user[index].gender;

        if (gender == "female") 
        {
            genderContenant = "<img src=\"image/image_femme.png\">";
        }
        else 
        {
            genderContenant = "<img src=\"image/image_homme.png\">";
        }

        addcolonne += "<tr>"
        addcolonne += "<td>"+user[index].login.username+"</td>";
        addcolonne += "<td>"+genderContenant+"</td>";       
        addcolonne += "<td>"+user[index].name.last +" "+user[index].name.first+"</td>";
        addcolonne += "<td><img class=\"thumbnail rounded\" src=\""+user[index].picture.large+"\"></td>";
        addcolonne += "<td>"+user[index].location.city+"</td>";
        addcolonne += "<td>"+"<img src=\"image/drapeau_fr.jpg\">"+"</td>";
        addcolonne += "</tr>"
    }

    // Ajout dans le tableau HTML
    addcolonne += "</tbody>";
    document.getElementById("tableau").innerHTML += addcolonne;
}