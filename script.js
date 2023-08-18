function goBack() {
    window.history.back();
}

document.addEventListener('DOMContentLoaded', function () {
    const goToSelectPage = document.querySelector('div.button'); 

    goToSelectPage.addEventListener('click', function () {
        window.location.href = './select.html'; 
    });
});



function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speechSynthesis.speak(speech);
  }
  
  document.addEventListener("DOMContentLoaded", () => {
    const speakButton = document.getElementById("speakButton");
  
    speakButton.addEventListener("click", () => {
      const textNodes = getTextNodes(document.body);
      let textToSpeak = "";
  
      textNodes.forEach(textNode => {
        textToSpeak += textNode.textContent + " ";
      });
  
      speak(textToSpeak); // speak 함수 호출
    });
  });

function getTextNodes(node) {
    const textNodes = [];

    if (node.nodeType === Node.TEXT_NODE) {
      textNodes.push(node);
    } else {
      const children = node.childNodes;
      for (let i = 0; i < children.length; i++) {
        textNodes.push(...getTextNodes(children[i]));
      }
    }
  
    return textNodes;
  }

  async function fetchUniversities() {
    try {
        const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
        const universities = await response.json();

        const universitiesTitle0 = document.getElementById("universities-title0");
        const universitiesList1 = document.getElementById("universities-list1");
        const universitiesTitle2 = document.getElementById("universities-title2");
        const universitiesList3 = document.getElementById("universities-list3");
        const universitiesTitle4 = document.getElementById("universities-title4");
        const universitiesList5 = document.getElementById("universities-list5");
        const universitiesTitle6 = document.getElementById("universities-title6");
        const universitiesList7 = document.getElementById("universities-list7");
        const universitiesTitle8 = document.getElementById("universities-title8");
        const universitiesList9 = document.getElementById("universities-list9");
        const universitiesTitle10 = document.getElementById("universities-title10");
        const universitiesList11 = document.getElementById("universities-list11");

        universitiesTitle0.textContent = universities[0].name;
        universitiesList1.textContent = universities[1].name;
        universitiesTitle2.textContent = universities[2].name;
        universitiesList3.textContent = universities[3].name;
        universitiesTitle4.textContent = universities[4].name;
        universitiesList5.textContent = universities[5].name;
        universitiesTitle6.textContent = universities[6].name;
        universitiesList7.textContent = universities[7].name;
        universitiesTitle8.textContent = universities[8].name;
        universitiesList9.textContent = universities[9].name;
        universitiesTitle10.textContent = universities[10].name;
        universitiesList11.textContent = universities[11].name;
    } catch (error) {
        console.error("Error fetching universities:", error);
    }
}

fetchUniversities();










//   async function fetchUniversities() {
//     try {
//         const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
//         const universities = await response.json();

//         const universitiesTitle0 = document.getElementById("universities-title0");
//         const universitiesList1 = document.getElementById("universities-list1");
//         const universitiesTitle2 = document.getElementById("universities-title2");
//         const universitiesList3 = document.getElementById("universities-list3");
//         const universitiesTitle4 = document.getElementById("universities-title4");
//         const universitiesList5 = document.getElementById("universities-list5");
//         const universitiesTitle6 = document.getElementById("universities-title6");
//         const universitiesList7 = document.getElementById("universities-list7");
//         const universitiesTitle8 = document.getElementById("universities-title8");
//         const universitiesList9 = document.getElementById("universities-list9");
//         const universitiesTitle10 = document.getElementById("universities-title10");
//         const universitiesList11 = document.getElementById("universities-list11");

//         universitiesTitle0.textContent = universities[0].name;
//         universitiesList1.textContent = universities[1].name;
//         universitiesTitle2.textContent = universities[2].name;
//         universitiesList3.textContent = universities[3].name;
//         universitiesTitle4.textContent = universities[4].name;
//         universitiesList5.textContent = universities[5].name;
//         universitiesTitle6.textContent = universities[6].name;
//         universitiesList7.textContent = universities[7].name;
//         universitiesTitle8.textContent = universities[8].name;
//         universitiesList9.textContent = universities[9].name;
//         universitiesTitle10.textContent = universities[10].name;
//         universitiesList11.textContent = universities[11].name;
//     } catch (error) {
//         console.error("Error fetching universities:", error);
//     }
// }

// fetchUniversities();



// // 01
// async function fetchUniversities0() {
//     const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
//     const universities = await response.json();

//     const universitiesTitle = document.getElementById("universities-title0");
//     const firstUniversity = universities[0];
    
//     const universityDiv = document.createElement("div");
//     universityDiv.textContent = `${firstUniversity.name}`;
//     universitiesTitle.appendChild(universityDiv);
// }
// fetchUniversities0();


// async function fetchUniversities1() {
//     const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
//     const universities = await response.json();

//     const universitiesTitle = document.getElementById("universities-list1");
//     const firstUniversity = universities[1];
    
//     const universityDiv = document.createElement("div");
//     universityDiv.textContent = `${firstUniversity.name}`;
//     universitiesTitle.appendChild(universityDiv);
// }
// fetchUniversities1();



// // 23
// async function fetchUniversities2() {
//   const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
//   const universities = await response.json();

//   const universitiesTitle = document.getElementById("universities-title2");
//   const firstUniversity = universities[0]; // 첫 번째 대학교 정보 가져오기
  
//   const universityDiv = document.createElement("div");
//   universityDiv.textContent = `${firstUniversity.name}`;
//   universitiesTitle.appendChild(universityDiv);
// }
// fetchUniversities2();


// async function fetchUniversities3() {
//   const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
//   const universities = await response.json();

//   const universitiesTitle = document.getElementById("universities-list3");
//   const firstUniversity = universities[1]; // 첫 번째 대학교 정보 가져오기
  
//   const universityDiv = document.createElement("div");
//   universityDiv.textContent = `${firstUniversity.name}`;
//   universitiesTitle.appendChild(universityDiv);
// }
// fetchUniversities3();


// // 45
// async function fetchUniversities4() {
//   const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
//   const universities = await response.json();

//   const universitiesTitle = document.getElementById("universities-title4");
//   const firstUniversity = universities[0]; // 첫 번째 대학교 정보 가져오기
  
//   const universityDiv = document.createElement("div");
//   universityDiv.textContent = `${firstUniversity.name}`;
//   universitiesTitle.appendChild(universityDiv);
// }
// fetchUniversities4();


// async function fetchUniversities5() {
//   const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
//   const universities = await response.json();

//   const universitiesTitle = document.getElementById("universities-list5");
//   const firstUniversity = universities[1]; // 첫 번째 대학교 정보 가져오기
  
//   const universityDiv = document.createElement("div");
//   universityDiv.textContent = `${firstUniversity.name}`;
//   universitiesTitle.appendChild(universityDiv);
// }
// fetchUniversities5();


// // 67
// async function fetchUniversities6() {
//   const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
//   const universities = await response.json();

//   const universitiesTitle = document.getElementById("universities-title6");
//   const firstUniversity = universities[0]; // 첫 번째 대학교 정보 가져오기
  
//   const universityDiv = document.createElement("div");
//   universityDiv.textContent = `${firstUniversity.name}`;
//   universitiesTitle.appendChild(universityDiv);
// }
// fetchUniversities6();


// async function fetchUniversities7() {
//   const response = await fetch("http://13.124.243.146:8080/api/cnu/universities");
//   const universities = await response.json();

//   const universitiesTitle = document.getElementById("universities-list7");
//   const firstUniversity = universities[1]; // 첫 번째 대학교 정보 가져오기
  
//   const universityDiv = document.createElement("div");
//   universityDiv.textContent = `${firstUniversity.name}`;
//   universitiesTitle.appendChild(universityDiv);
// }
// fetchUniversities7();