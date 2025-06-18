package com.realestate.backend.DTO;

import java.math.BigDecimal;
import java.util.List;

public class PropertyDTO {
    public String title;
    public String description;

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public String getAdress() {
        return adress;
    }

    public void setAdress(String adress) {
        this.adress = adress;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }

    public String getFloor() {
        return floor;
    }

    public void setFloor(String floor) {
        this.floor = floor;
    }


    public Integer getRooms() {
        return rooms;
    }

    public void setRooms(Integer rooms) {
        this.rooms = rooms;
    }

    public Integer getBathrooms() {
        return bathrooms;
    }

    public void setBathrooms(Integer bathrooms) {
        this.bathrooms = bathrooms;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getArea() {
        return area;
    }

    public void setArea(String area) {
        this.area = area;
    }

    public Integer getSurface() {
        return surface;
    }

    public void setSurface(Integer surface) {
        this.surface = surface;
    }

    public String getSuitable_for() {
        return suitable_for;
    }

    public void setSuitable_for(String suitable_for) {
        this.suitable_for = suitable_for;
    }

    public List<String> getFacilities() {
        return facilities;
    }

    public void setFacilities(List<String> facilities) {
        this.facilities = facilities;
    }



    public String getAgent_asigned() {
        return agent_asigned;
    }

    public void setAgent_asigned(String agent_asigned) {
        this.agent_asigned = agent_asigned;
    }

    public String type;
    public BigDecimal price;
    public String adress;
    public String city;
    public String floor;
    private String compartmentalization;

    public String getCompartmentalization() {
        return compartmentalization;
    }

    public void setCompartmentalization(String compartmentalization) {
        this.compartmentalization = compartmentalization;
    }

    public Integer rooms;
    public Integer bathrooms;
    public Integer year;
    public String area;
    public Integer surface;
    public String suitable_for;
    public List<String> facilities;
    private List<String> images;

    public List<String> getImages() {
        return images;
    }

    public void setImages(List<String> images) {
        this.images = images;
    }


    public String agent_asigned;

}
