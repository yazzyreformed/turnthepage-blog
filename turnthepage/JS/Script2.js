document.addEventListener("DOMContentLoaded", () => {
    
    const settingsIcon = document.getElementById("settings-icon");
    const settingsMenu = document.getElementById("settings-menu");

    settingsIcon.addEventListener("click", () => {
        settingsMenu.classList.toggle("hidden");
        settingsMenu.classList.toggle("show");
    });
    
    
    document.addEventListener("click", (e) => {
        if (!settingsIcon.contains(e.target) && !settingsMenu.contains(e.target)) {
            settingsMenu.classList.add("hidden");
            settingsMenu.classList.remove("show");
        }
    });
    

    
    const darkModeToggle = document.getElementById("dark-mode-toggle");

    darkModeToggle.addEventListener("change", () => {
        document.body.classList.toggle("dark-mode");

        
        if (darkModeToggle.checked) {
            localStorage.setItem("dark-mode", "enabled");
        } else {
            localStorage.setItem("dark-mode", "disabled");
        }
    });

    
    if (localStorage.getItem("dark-mode") === "enabled") {
        document.body.classList.add("dark-mode");
        darkModeToggle.checked = true;
    }

    
    const languageToggle = document.getElementById("language-toggle");

    languageToggle.addEventListener("change", () => {
        const isEnglish = languageToggle.checked;

        if (isEnglish) {
            document.querySelector(".main-title").textContent = "Home Page";
            document.querySelector("p").textContent = "Welcome to the TurnThePage site.";
            document.querySelectorAll(".center-section a")[0].textContent = "Rewriting Fate: The Dance of Possibilities";
            document.querySelectorAll(".center-section a")[1].textContent = "Time Lapse: Time Is No Game";
            document.querySelectorAll(".center-section a")[2].textContent = "You Talking to Me? A Review & Philosophy of Taxi Driver";
            document.querySelectorAll(".center-section a")[3].textContent = "The Criterion of Good? - Crime and Punishment Review";
            document.querySelectorAll(".center-section a")[4].textContent = " As Long as You Stay in the System, You Are Blind – José Saramago | Blindness";
            document.querySelectorAll(".center-section a")[5].textContent = "The Chaos of Water and Fire: Shutter Island Film Review";
            document.querySelectorAll(".center-section a")[6].textContent = "Film Analysis: A Clockwork Orange";
        } else {
            document.querySelector(".main-title").textContent = "Ana Sayfa";
            document.querySelector("p").textContent = "TurnThePage sitesine hoş geldiniz.";
            document.querySelectorAll(".center-section a")[0].textContent = "Kaderi Yeniden Yazmak: Olasılıkların Dansı";
            document.querySelectorAll(".center-section a")[1].textContent = "Time Lapse: Zamanla Oyun Olmaz";
            document.querySelectorAll(".center-section a")[2].textContent = "You Talking to Me? Taxi Driver İnceleme/Felsefesi";
            document.querySelectorAll(".center-section a")[3].textContent = "İyi'nin Ölçütü? - Suç ve Ceza İnceleme";
            document.querySelectorAll(".center-section a")[4].textContent = "Sistem İçinde Kaldığın Müddetçe “Körsün” – Jose Saramago | Körlük";
            document.querySelectorAll(".center-section a")[5].textContent = "Su ve Ateşin Karmaşası: Shutter Island Film İncelemesi";
            document.querySelectorAll(".center-section a")[6].textContent = "Film Analizi: Otomatik Portakal";
        }
    });

    
    const newPostModal = document.getElementById("newPostModal");
    const newPostButton = document.getElementById("new-post-button"); 
    const closeModalButton = document.getElementById("close-modal"); 
    const newPostForm = document.getElementById("newPostForm"); 

    newPostButton.addEventListener("click", () => {
        newPostModal.style.display = "block";
    });

    closeModalButton.addEventListener("click", () => {
        newPostModal.style.display = "none";
    });

    
    newPostForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const postTitle = document.getElementById("postTitle").value;
        const postContent = document.getElementById("postContent").value;

        const postList = document.querySelector(".center-section");
        const newPost = document.createElement("a");
        newPost.href = "#";
        newPost.textContent = postTitle;

        postList.appendChild(newPost);

        newPostModal.style.display = "none";
        newPostForm.reset();
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("searchInput");
    const searchButton = document.getElementById("searchButton");
    const resultsContainer = document.createElement("div");
    resultsContainer.id = "searchSuggestions";
    resultsContainer.style.position = "absolute";
    resultsContainer.style.backgroundColor = "white";
    resultsContainer.style.border = "1px solid #ccc";
    resultsContainer.style.maxHeight = "200px";
    resultsContainer.style.overflowY = "auto";
    const searchBar = document.getElementById("search-bar");
searchBar.appendChild(resultsContainer);


    
    const posts = [
        { title: "Kaderi Yeniden Yazmak: Olasılıkların Dansı", link: "denemeyazisi.html" },
        { title: "Time Lapse: Zamanla Oyun Olmaz", link: "denemeyazisi2.html" },
        { title: "You Talking to Me? Taxi Driver İnceleme/Felsefesi", link: "denemeyazisi3.html" },
        { title: "İyi'nin Ölçütü? - Suç ve Ceza İnceleme", link: "denemeyazisi4.html" },
        { title: "Sistem İçinde Kaldığın Müddetçe “Körsün” – Jose Saramago | Körlük", link: "denemeyazisi5.html" },
        { title: "Su ve Ateşin Karmaşası: Shutter Island Film İncelemesi", link: "denemeyazisi6.html" },
        { title: "Film Analizi: Otomatik Portakal", link: "denemeyazisi7.html" }
    ];

    function searchPosts(query) {
        resultsContainer.innerHTML = "";
        if (!query) return;

        const filteredPosts = posts.filter(post => 
            post.title.toLowerCase().includes(query.toLowerCase())
        );

        if (filteredPosts.length > 0) {
            filteredPosts.forEach(post => {
                const resultItem = document.createElement("div");
                resultItem.className = "suggestion-item";
                resultItem.style.padding = "10px";
                resultItem.style.cursor = "pointer";
                resultItem.innerHTML = `<a href="${post.link}"><strong>${post.title}</strong></a>`;
                resultsContainer.appendChild(resultItem);
            });
        } else {
            resultsContainer.innerHTML = "<p>Sonuç bulunamadı.</p>";
        }
    }

    searchInput.addEventListener("keyup", () => {
        searchPosts(searchInput.value.trim());
    });

    searchButton.addEventListener("click", () => {
        searchPosts(searchInput.value.trim());
    });
});

