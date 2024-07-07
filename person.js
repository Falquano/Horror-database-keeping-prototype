// Persons
class Person {
    constructor() {
        this.gender = generate_gender();
        this.name = generate_name(this.gender);
        this.family_name = generate_family_name();
        this.birth = "";
        this.death = "";
        this.status = Statuses[0];
    }
};

function generate_gender() {
    return "non-binary";
}

function generate_name(gender) {
    return "Blib";
}

function generate_family_name() {
    return "Oblob";
}

const Statuses = ["LIVING", "DECEASED", "MISSING", "OTHER"];