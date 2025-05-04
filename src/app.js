function showMenu() { const navLinks = document.getElementById("navLink"); navLinks.classList.toggle("show") }


function Minimum_Vertical_Leap(){

    let HoopHeight = document.getElementById("HoopHeight").value;
    let StandingReach = document.getElementById("StandingReach").value;
    let PalmSize = document.getElementById("PalmSize").value;
    let Output = document.getElementById("MinimumVerticalLeap");
    
    let Result = parseFloat(HoopHeight) - parseFloat(StandingReach) + parseFloat (PalmSize)
    console.log(Result.toFixed(2));
    Output.innerHTML = `<strong>${Result.toFixed(2)}cm</strong> is Minimum Vertical Leap!`
}

function Dunk_Calculate() {
    // Get Input Values
    let HoopHeight = parseFloat(document.getElementById("HoopHeight").value) || 305; // Default 305 cm
    let StandingReach = parseFloat(document.getElementById("StandingReach").value) || 0;
    let VerticalJump = parseFloat(document.getElementById("VerticalJump").value) || 0;
    let PlayerHeight = parseFloat(document.getElementById("PlayerHeight").value) || 0;
    let BodyMass = parseFloat(document.getElementById("BodyMass").value) || 0;
    let PalmSize = parseFloat(document.getElementById("PalmSize").value) || 0;
    let GravitationalAcceleration = parseFloat(document.getElementById("GravitationalAcceleration").value) || 9.8; // Default 9.8 m/s²

    // Get Output Boxes for Showing Results
    let MinimumVerticalLeap = document.getElementById("MinimumVerticalLeap");
    let TotalReach = document.getElementById("TotalReach");
    let JumpingEnergy = document.getElementById("JumpingEnergy");
    let HangTime = document.getElementById("HangTime");
    let TakeoffVelocity = document.getElementById("TakeoffVelocity");

    // Calculations with Units Handling (assuming inputs in cm and kg)
    let minLeap = HoopHeight - StandingReach + PalmSize; // cm
    let totalReach = StandingReach + VerticalJump; // cm
    let jumpingEnergy = BodyMass * GravitationalAcceleration * (minLeap / 100); // Joules (minLeap to meters)
    let hangTime = Math.sqrt((2 * (VerticalJump / 100)) / GravitationalAcceleration); // seconds (VerticalJump to meters)
    let takeoffVelocity = Math.sqrt(2 * GravitationalAcceleration * (VerticalJump / 100)); // m/s (VerticalJump to meters)

    // Display Results
    MinimumVerticalLeap.innerHTML = minLeap.toFixed(1) + " cm";
    TotalReach.innerHTML = totalReach.toFixed(1) + " cm";
    JumpingEnergy.innerHTML = jumpingEnergy.toFixed(1) + " Joules";
    HangTime.innerHTML = hangTime.toFixed(2) + " seconds";
    TakeoffVelocity.innerHTML = takeoffVelocity.toFixed(2) + " m/s";

    // Optional: Dunk Feasibility Check
    let dunkResult = document.getElementById("DunkResult"); // Add this element in HTML if needed
    if (dunkResult) {
        dunkResult.innerHTML = totalReach >= HoopHeight ? "Yes, you can dunk!" : "No, improve your jump.";
    }
}


