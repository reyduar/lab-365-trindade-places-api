class PlaceCreateDTO {
  constructor({ name, phone, openingHours, description, latitude, longitude }) {
    this.name = name;
    this.phone = phone;
    this.openingHours = openingHours;
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
  }
}

module.exports = PlaceCreateDTO;
