import { LocationType } from "mongoose/locations/schema";
import styles from "./index.module.css";

interface PropsInterface {
    location: LocationType;
}

const LocationDetail = ( props : PropsInterface): JSX.Element => {
    let location = props.location;
    return (
        <div>
            {location && (
                <ul className={styles.root}>
                    <li>
                        <b>Address: </b>
                        {location.address ?? "N/A"}
                    </li>
                    <li>
                        <b>Zipcode: </b>
                        {location.zipcode ?? "N/A"}
                    </li>
                    <li>
                        <b>Borough: </b>
                        {location.borough ?? "N/A"}
                    </li>
                    <li>
                        <b>Cuisine: </b>
                        {location.cuisine ?? "N/A"}
                    </li>
                    <li>
                        <b>Grade: </b>
                        {location.grade ?? "N/A"}
                    </li>
                </ul>
            )}
        </div>
    );
};

export default LocationDetail;
