import {
    auth,
    db,
    createUserWithEmailAndPassword,
    doc,
    setDoc
} from "../firebase/firebase.js";

const form = document.getElementById("joinForm");

form.addEventListener("submit", async (e) => {

    e.preventDefault();

    // Form values
    const fullName = document.getElementById("fullName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const phone = document.getElementById("phone").value;
    const country = document.getElementById("country").value;
    const province = document.getElementById("province").value;
    const city = document.getElementById("city").value;
    const droneBrand = document.getElementById("droneBrand").value;
    const droneModel = document.getElementById("droneModel").value;
    const camera = document.getElementById("camera").value;
    const experience = document.getElementById("experience").value;
    const instagram = document.getElementById("instagram").value;
    const website = document.getElementById("website").value;

    try {

        // Create Firebase account
        const userCredential =
            await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

        const user = userCredential.user;

        // Save profile
        await setDoc(doc(db, "operators", user.uid), {

            fullName,
            email,
            phone,
            country,
            province,
            city,
            droneBrand,
            droneModel,
            camera,
            experience,
            instagram,
            website,

            createdAt: new Date()

        });

        alert("🎉 Welcome to Pakistan Aerial Archive!");

        form.reset();

    } catch (error) {

        alert(error.message);

        console.error(error);

    }

});