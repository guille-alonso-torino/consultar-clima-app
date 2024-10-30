import WeatherMainInfo from "./weatherMainInfo";
import "./weatherApp.module.css";
import styles from "./weatherApp.module.css";

const Target = (props) => {
    return (  
                            <div>


                                <div className="col-md-4 block" >
                                <div className={styles.weatherContainer}>
                                  {props.weather ? <WeatherMainInfo weather={props.weather} /> : props.load}
                                </div>
                                </div>


                            </div>
    );
}
 
export default Target;