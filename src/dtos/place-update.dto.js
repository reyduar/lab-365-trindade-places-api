class PlaceUpdateDTO {
  constructor({
    name,
    phone,
    openingHours,
    description,
    latitude,
    longitude,
    userId,
  }) {
    this.name = name;
    this.phone = phone;
    this.openingHours = openingHours;
    this.description = description;
    this.latitude = latitude;
    this.longitude = longitude;
    this.userId = userId;
  }
}

module.exports = PlaceUpdateDTO;
