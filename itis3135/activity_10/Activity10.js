$(document).ready(function () {


        // preload the image for each link
        preload(
                "./Activity10_images/pexels-barthy-bonhomme-185032.jpg",
                "./Activity10_images/pexels-craig-adderley-1917846.jpg",
                "./Activity10_images/pexels-jen-healy-2542323.jpg",
                "./Activity10_images/pexels-karsten-madsen-18103.jpg",
                "./Activity10_images/pexels-pixabay-34312.jpg",
                "./Activity10_images/pexels-ruvim-miksanskiy-1525606.jpg"
        )
        // set up the event handlers for each link
        
        // get the image URL and caption for each image and animate the caption

        // cancel the default action of each link


        // move the focus to the first link

}); // end ready

//made with help from https://stackoverflow.com/questions/3646036/preloading-images-with-javascript
var images = [];
function preload() {
        for (let i = 0; i < arguments.length; i++) {
                images[i] = new Image();
                images[i].src = preload.arguments[i];
        }
}