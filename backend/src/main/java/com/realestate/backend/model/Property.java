package com.realestate.backend.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

import java.math.BigDecimal;
import java.time.LocalDate;
import jakarta.persistence.*;


    @Entity
    @Table(name = "properties")
    public class Property {

        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        private Long property_id;


        public User getAgent() {
            return agent;
        }

        public void setAgent(User agent) {
            this.agent = agent;
        }

        @ManyToOne(fetch = FetchType.EAGER)
        @JoinColumn(name = "agent_id", referencedColumnName = "user_id")

        private User agent;
        private String title;
        private String description;
        private BigDecimal price;
        private String type;
        private String adress;
        private String city;
        @Column(name = "listing_date")
        private LocalDate listingDate;

        private String floor;
        private String compartmentalization;
        private Integer rooms;
        private String suitable_for;

        @Column(columnDefinition = "text[]")
        private String[] facilities;

        private Integer bathrooms;
        private Integer year;
        private String images;

        public void setImages(String images) {
            this.images = images;
        }

        public String getImages() {
            return images;
        }

        private String area;
        private Integer surface;

        public Long getProperty_id() {
            return property_id;
        }

        public void setProperty_id(Long property_id) {
            this.property_id = property_id;
        }

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

        public BigDecimal getPrice() {
            return price;
        }

        public void setPrice(BigDecimal price) {
            this.price = price;
        }

        public String getType() {
            return type;
        }

        public void setType(String type) {
            this.type = type;
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

        public LocalDate getListing_date() {
            return listingDate;
        }

        public void setListing_date(LocalDate listing_date) {
            this.listingDate = listing_date;
        }

        public String getFloor() {
            return floor;
        }

        public void setFloor(String floor) {
            this.floor = floor;
        }

        public String getCompartmentalization() {
            return compartmentalization;
        }

        public void setCompartmentalization(String compartmentalization) {
            this.compartmentalization = compartmentalization;
        }

        public Integer getRooms() {
            return rooms;
        }

        public void setRooms(Integer rooms) {
            this.rooms = rooms;
        }

        public String getSuitable_for() {
            return suitable_for;
        }

        public void setSuitable_for(String suitable_for) {
            this.suitable_for = suitable_for;
        }

        public String[] getFacilities() {
            return facilities;
        }

        public void setFacilities(String[] facilities) {
            this.facilities = facilities;
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
    }
