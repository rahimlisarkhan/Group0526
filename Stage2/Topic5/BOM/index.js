

// const btnReload = document.getElementById("btnReload");

// btnReload.addEventListener("click", function(){
//     //Reload the page
//     window.location.reload();
// });


// // console.log(window);


// // if(window.innerWidth < 600){
// //     alert("Screen size is less than 600px");
// // }


const aboutPage = window.location.pathname.includes("about.html");
// const aboutPage = window.location.pathname.endsWith("about.html");


if(aboutPage){
    console.log("You are on the about page");
    // alert("You are on the about page");

    const backBtn = document.getElementById("backBtn");

    backBtn.addEventListener("click", function(){
        //Go back to the previous page
        window.history.back();
    });

}


// window.navigator.geolocation.getCurrentPosition(function(position) {
//     console.log("Latitude: " + position.coords.latitude);
//     console.log("Longitude: " + position.coords.longitude);
// });



// async function fetchData(){
//         const response = await window.navigator.getBattery();

//         console.log(response);

// }


// fetchData()

// Simple Media Recorder Implementation
let mediaRecorder;
let recordedChunks = [];

async function startRecording() {
    try {
        // Get user media (audio and video)
        const stream = await navigator.mediaDevices.getUserMedia({
            video: true,
            audio: true
        });
        
        console.log("Media stream obtained:", stream);
        
        // Create MediaRecorder instance
        mediaRecorder = new MediaRecorder(stream);
        
        // Event handlers
        mediaRecorder.ondataavailable = function(event) {
            if (event.data.size > 0) {
                recordedChunks.push(event.data);
                console.log("Data chunk recorded:", event.data);
            }
        };
        
        mediaRecorder.onstop = function() {
            console.log("Recording stopped");
            
            // Create blob from recorded chunks
            const blob = new Blob(recordedChunks, {
                type: 'video/webm'
            });
            
            // Create download link
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'recording.webm';
            document.body.appendChild(a);
            a.click();
            
            // Clean up
            recordedChunks = [];
            URL.revokeObjectURL(url);
        };
        
        // Start recording
        mediaRecorder.start();
        console.log("Recording started...");
        
        // Stop recording after 5 seconds (for demo)
        setTimeout(() => {
            stopRecording();
        }, 5000);
        
    } catch (error) {
        console.error("Error accessing media devices:", error);
    }
}

function stopRecording() {
    if (mediaRecorder && mediaRecorder.state === "recording") {
        mediaRecorder.stop();
        
        // Stop all tracks
        mediaRecorder.stream.getTracks().forEach(track => {
            track.stop();
        });
    }
}

// Audio-only recorder
async function startAudioRecording() {
    try {
        const stream = await navigator.mediaDevices.getUserMedia({
            audio: true
        });
        
        console.log("Audio stream obtained:", stream);
        
        const audioRecorder = new MediaRecorder(stream);
        let audioChunks = [];
        
        audioRecorder.ondataavailable = function(event) {
            audioChunks.push(event.data);
        };
        
        audioRecorder.onstop = function() {
            const audioBlob = new Blob(audioChunks, {
                type: 'audio/webm'
            });
            
            const audioUrl = URL.createObjectURL(audioBlob);
            const audio = new Audio(audioUrl);
            
            console.log("Audio recorded. Playing back...");
            audio.play();
        };
        
        audioRecorder.start();
        console.log("Audio recording started...");
        
        // Stop after 3 seconds
        setTimeout(() => {
            audioRecorder.stop();
            stream.getTracks().forEach(track => track.stop());
        }, 3000);
        
    } catch (error) {
        console.error("Error accessing microphone:", error);
    }
}

// Check available devices
async function listMediaDevices() {
    try {
        const devices = await navigator.mediaDevices.enumerateDevices();
        
        console.log("Available media devices:");
        devices.forEach((device, index) => {
            console.log(`${index + 1}. ${device.kind}: ${device.label || 'Unknown Device'}`);
        });
        
    } catch (error) {
        console.error("Error listing devices:", error);
    }
}

// Initialize - list devices first
console.log("Navigator.mediaDevices:", navigator.mediaDevices);
listMediaDevices();

// Uncomment to start recording (requires user interaction)
// startRecording();
// startAudioRecording();
