const loggedOutLinks = document.querySelectorAll('.logged-out')
const loggedInLinks = document.querySelectorAll('.logged-in')

const loginCheck = user =>{
  if (user){
    loggedInLinks.forEach(link => link.style.display = 'block');
    loggedOutLinks.forEach(link => link.style.display = 'none');
  } else {
    loggedInLinks.forEach(link => link.style.display = 'none');
    loggedOutLinks.forEach(link => link.style.display = 'block');
  }
}

// Sign Up Event
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const email = document.querySelector('#signup-email').value;
    const password = document.querySelector('#signup-password').value;

    auth.
        createUserWithEmailAndPassword(email, password)
        .then(userCredential => {
            //Clear the form
            signupForm. reset();

            //Close the modal
            $('#signupModal').modal('hide')

            console.log('sing up')
            window.location='index.html';

        })
});

// Sign In Event
const signinForm = document.querySelector('#login-form');

signinForm.addEventListener('submit', e => {
    e.preventDefault();
    const email = document.querySelector('#login-email').value;
    const password = document.querySelector('#login-password').value;
    auth.
        signInWithEmailAndPassword(email, password)
        .then(userCredential => {
            //Clear the form
            signupForm.reset();

            //Close the modal
            $('#signinModal').modal('hide')
            //lo agregue yoppp
            window.location='index.html';
            console.log('sing in')
        })
});

// Logout

const logout = document.querySelector('#logout');

logout.addEventListener('click', e => {
    e.preventDefault();
    auth.signOut().then(()=>{
        console.log('sign out')
    })
})

// Google login
const googleButton = document.querySelector('#googleLogin')
googleButton.addEventListener('click', e => {
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider)
  .then(result => {
    console.log('google sign in')
    // aqui van los modales para cerrar 
     //Clear the form
     signupForm.reset();
     //Close the modal
     $('#signinModal').modal('hide')
     window.location='../promociones/descuentos-y-mas.html';
  })
  .catch(err => {
    console.log(err)
  })
})

//Facebook Login
//const facebookButton = document.querySelector('#facebookLogin')
//facebookButton.addEventListener('click', e =>{
  //e.preventDefault();
  //const provider = new firebase.auth.FacebookAuthProvider();
  //auth.signInWithPopup(provider)
  //.then(result => {
    //console.log(result);
    //console.log('facebook sign in')
  //})
  //.catch(err => {
    //console.log(err)
  //})
//})


// Posts
const postList = document.querySelector('.posts');
const setupPosts = data => {
    if (data.length) {
      let html = '';
      data.forEach(doc => {
        const post = doc.data()
        const li = `
        <!--li class="list-group-item list-group-item-action">
          <h4><i class="fas fa-gift"></i>&nbsp;${post.titulo}</h4>
          <br>
          <p>${post.descripcion}</p>
          <br>
          <h6><i class="far fa-clock"></i>&nbsp;${post.fecha}</h6>
        </li>
        <br-->
      `;
        html += li;
      });
      postList.innerHTML = html;
    } else {
      postList.innerHTML = '<!--p class="text-center"> Registrate en tu teléfono móvil para ver las últimas noticias. </p-->';
    }
  }


//Eventos
// listar los datos para los usuarios que estes autenticados

auth.onAuthStateChanged(user => {
  if (user) {
    fs.collection('posts')
      .get()
      .then((snapshot) => {
        setupPosts(snapshot.docs)
        loginCheck(user);
        })
    } else {
      setupPosts([])
      loginCheck(user);
    }
})


// Onclick
function noticias() {
  document.location.href = "../index.html"
}



///// Nuevo script

function observador(){
  firebase.auth().onAuthStateChanged(function(user){
    if (user){
    console.log('existe usuario activo')
    contenido.innerHTML = `
    <div class="container mt-5">
    <div class="alert alert-info" role="alert">
    Confirma tu correo y refresca esta pagina
  </div>
  </div>
  `;
    aparece(user);
    //
    var displayName = user.displayName;
    var email = user.email;


   // console.log('*******');
   // console.log(user.emailVerified)
   // console.log('*******');

    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;

  } else {
    console.log('no existe usuario activo')
    contenido.innerHTML = `
    <!--div class="container mt-5">
    <div class="alert alert-warning" role="alert">
  Registrate con tu email y una contraseña. La contraseña debera tener
  un minimo de 6 caracteres
</div>
</div-->
  `;
  }
  });
}
observador();


function aparece(user){
  var user = user;
  var contenido = document.getElementById('contenido');
  if(user.emailVerified){

  contenido.innerHTML = `
    <!--div class="container mt-5">
  <div class="alert alert-success" role="alert">
  <h4 class="alert-heading">Bienvenido ${user.email}</h4>
  <p>Gracias por registrarte crack.</p>
  <hr>
  <p class="mb-0">Solo presiona el botón de abajo y continua navegando.</p-->
</div>
  
  </div-->
  
  `;
}
  
}