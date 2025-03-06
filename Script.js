function suggestColor() {
    const skinTone = document.getElementById("skin-tone").value;
    const hairType = document.getElementById("hair-type").value;
    const hairStyle = document.getElementById("hair-style").value;
    const profession = document.getElementById("profession").value;
    let color = "";

    if (skinTone === "fair") {
        color = profession === "corporate" ? "Soft Blonde" : profession === "creative" ? "Pastel Pink" : "Honey Brown";
    } else if (skinTone === "medium") {
        color = profession === "corporate" ? "Chocolate Brown" : profession === "creative" ? "Auburn Red" : "Caramel Highlights";
    } else {
        color = profession === "corporate" ? "Espresso Black" : profession === "creative" ? "Electric Blue" : "Deep Burgundy";
    }
    
    if (hairStyle === "short") {
        color += " with bold highlights";
    } else if (hairStyle === "medium-length") {
        color += " with soft balayage";
    } else if (hairStyle === "long") {
        color += " with ombré effect";
    } else if (hairStyle === "layered") {
        color += " with sun-kissed highlights";
    } else if (hairStyle === "bob") {
        color += " with a chic tint";
    }
    
    document.getElementById("suggested-color").innerText = `Recommended Hair Color: ${color}`;
}