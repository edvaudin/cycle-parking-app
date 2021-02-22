import { render } from '@testing-library/react';
import React from 'react'

const Calculator = (props: any) => {
    //var storedUseClass = localStorage.getItem('useClass');]
    var longSpaces;
    var shortSpaces;
    
    switch(props.useClass.useClass){
        case "A1 - Food retail": CalculateA1FoodSpaces();
            break;
        case "A1 - Non-food retail": CalculateA1NonFoodSpaces();
            break;
        case "A2-A5 - Financial / professional services; cafes & restaurants; drinking establishments; take-aways" : CalculateA2toA5Spaces();
            break;
        case "B1 - Business offices" : CalculateB1OfficeSpaces();
            break;
        case "B1 - Light industry and research and development": CalculateB1LightIndustrySpaces();
            break;
        case "B2-B8 - General industrial, storage or distribution": CalculateB2toB8Spaces();
            break;
        case "C1 - Hotels (bars, restaurants, gyms etc. open to the public should be considered individually under relevant standards)": CalculateC1Spaces()
            break;
        case "C2 - Hospitals": CalculateC2HospitalSpaces();
            break;
        case "C2 - Care homes / secure accommodation": CalculateC2CareHomeSpaces();
            break;
        case "C3-C4 - Dwellings (all)": CalculateC3toC4Spaces();
            break;
        case "D1 - Nurseries": CalculateD1NurserySpaces();
            break;
        case "D1 - Primary schools / secondary schools / sixth form colleges": CalculateD1SchoolSpaces();
            break;
        case "D1 - Universities / colleges": CalculateD1UniSpaces();
            break;
        case "D1 - Health centre, including dentists": CalculateD1HealthSpaces();
            break;
        case "D1 - Other (e.g. library, church)": CalculateD1OtherSpaces();
            break;
        case "D2 - Other (e.g. cinema, bingo)": CalculateD2OtherSpaces();
            break;
        case "D2 - Sports (e.g. sports hall, swimming, gymnasium)": CalculateD2SportSpaces();
            break;
        case "Student Accommodation": CalculateStudentAccommodationSpaces();
            break;
        case "Specialist older persons housing": CalculateOlderPersonsSpaces();
            break;
        default: longSpaces = shortSpaces = 0;

    }

    function CalculateA1FoodSpaces() {
        if (props.useClass.requirements.GROSS_EXTERN_AREA >= 100){
                longSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 175)), 2);
            if (props.useClass.requirements.LOCATION != 0){
                if (props.useClass.requirements.GROSS_EXTERN_AREA <= 750){
                    shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 20)), 2);
                }
                else{
                    shortSpaces = 37.5 + Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 150);
                }
            } else {
                if (props.useClass.requirements.GROSS_EXTERN_AREA <= 750){
                    shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 40)), 2);
                }
                else{
                    shortSpaces = 18.75 + Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 300);
                }
            }
        }
        else{
            longSpaces = 0;
            shortSpaces = 0;
        }
    }

    function CalculateA1NonFoodSpaces(){
        if (props.useClass.requirements.GROSS_EXTERN_AREA >= 100){
            if (props.useClass.requirements.GROSS_EXTERN_AREA <= 1000){
                longSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 250)), 2);
            }
            else{
                longSpaces = 4 + Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 1000);
            }
            if (props.useClass.requirements.LOCATION != 0){
                if (props.useClass.requirements.GROSS_EXTERN_AREA <= 1000){
                shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 60)), 2);
                }
                else{
                shortSpaces = 16.67 + Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 500);
                }
            } else {
                if (props.useClass.requirements.GROSS_EXTERN_AREA <= 1000){
                shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 125)), 2);
                }
                else{
                shortSpaces = 8 + Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 1000);
                }
            }
        }
        else{
            longSpaces = 0;
            shortSpaces = 0;
        }
    }

    function CalculateA2toA5Spaces() {
        if (props.useClass.requirements.GROSS_EXTERN_AREA >= 100) {
            longSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 175)), 2);

            if (props.useClass.requirements.LOCATION != 0) {
                shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 20)), 2);
            }
            else {
                shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 40)), 2);
            }
        }
        else {
            longSpaces = 0;
            shortSpaces = 0;
        }
    }

    function CalculateB1OfficeSpaces() {
        if (props.useClass.requirements.LOCATION != 0) {
            Math.max((longSpaces = Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 75)), 2);

        } else {
            Math.max((longSpaces = Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 150)), 2);
        }
        
        if (props.useClass.requirements.GROSS_EXTERN_AREA <= 5000) {
            Math.max((shortSpaces = Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 500)), 2);
        }
        else {
            Math.max((shortSpaces = 10 + Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 5000)), 2);
        }
    }

    function CalculateB1LightIndustrySpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 250)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 1000)), 2);
    }

    function CalculateB2toB8Spaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 500)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 1000)), 2);
    }

    function CalculateC1Spaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.BEDROOMS / 20)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.BEDROOMS / 50)), 2);
    }

    function CalculateC2HospitalSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 5)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 30)), 2);
    }

    function CalculateC2CareHomeSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 5)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.BEDROOMS / 20)), 2);
    }
    
    function CalculateC3toC4Spaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STUDIOS) + Math.round(props.useClass.requirements.TWO_PERSON_ONE_BEDROOM * 1.5) + (props.useClass.requirements.TWO_BEDROOM_PLUS * 2)), 2);
        if (props.useClass.requirements.DWELLINGS < 5)
        {
            shortSpaces = 0;
        }
        else if (props.useClass.requirements.DWELLINGS >= 5 && props.useClass.requirements.DWELLINGS <= 40)
        {
            shortSpaces = 2;
        }
        else
        {
            shortSpaces = 2 + Math.round(props.useClass.requirements.DWELLINGS / 40);
        }
    }

    function CalculateD1NurserySpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 8) + Math.round(props.useClass.requirements.STUDENTS / 8)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 8) + Math.round(props.useClass.requirements.STUDENTS / 8)), 2);
    }

    function CalculateD1SchoolSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 8) + Math.round(props.useClass.requirements.STUDENTS / 8)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.STUDENTS / 100)), 2);
    }

    function CalculateD1UniSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 4) + Math.round(props.useClass.requirements.STUDENTS / 20)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.STUDENTS / 7)), 2);
    }

    function CalculateD1HealthSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 5)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 3)), 2);
    }

    function CalculateD1OtherSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 8)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 100)), 2);
    }
    
    function CalculateD2OtherSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 8)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.SEATS / 30)), 2);
    }

    function CalculateD2SportSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.STAFF / 8)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.GROSS_EXTERN_AREA / 100)), 2);
    }

    function CalculateStudentAccommodationSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.BEDROOMS * 0.75)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.BEDROOMS / 40)), 2);
    }

    function CalculateOlderPersonsSpaces(){
        longSpaces = Math.max((Math.round(props.useClass.requirements.BEDROOMS / 10)), 2);
        shortSpaces = Math.max((Math.round(props.useClass.requirements.BEDROOMS / 40)), 2);
    }

    return(
        <div>
            <h2>Long-stay spaces: {longSpaces}</h2>
            <h2>Short-stay spaces: {shortSpaces}</h2>
        </div>
    )
}

export default Calculator