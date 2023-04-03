import React from 'react';
import styles from '../styles.module.css';

const Legend: React.FC = () => (
    <details>
        <summary>
            Legend
        </summary>
        <table className={styles.legendTable}>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.water}`} />
                </td>
                <td>River</td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.area} ${styles.water}`}>
                        <div />
                    </div>
                </td>
                <td>Body of water</td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.levelCurve}`}>
                        <div>50</div>
                    </div>
                </td>
                <td>
                    Level curve. 1 unit = 2 meters
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.freeway}`} />
                </td>
                <td>
                    Freeway / high speed road
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.mainRoad}`} />
                </td>
                <td>
                    National road / main road
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.secondaryRoad}`} />
                </td>
                <td>
                    State road / secondary road
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.otherRoad}`} />
                </td>
                <td>
                    Other road, paved
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.unpavedRoad}`} />
                </td>
                <td>
                    Other road, unpaved
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.rail}`}>
                        <div className={`${styles.verticalLineContainer} ${styles.railCrossContainer}`}>
                            <div className={styles.railCross}/>
                            <div className={styles.railCross}/>
                            <div className={styles.railCross}/>
                            <div className={styles.railCross}/>
                        </div>
                    </div>
                </td>
                <td>
                    Railroad
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.area} ${styles.park}`}>
                        Parque
                    </div>
                </td>
                <td>
                    Protected natural areas
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.area} ${styles.airport}`}>
                        ABC
                    </div>
                </td>
                <td>
                    Airport
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.area} ${styles.urbanArea}`}></div>
                </td>
                <td>
                    Urban area
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.countryBorder}`}>
                        <div className={styles.countryBorderInternal} />
                    </div>
                </td>
                <td>
                    Country border
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.stateBorder}`}>
                        <div className={styles.stateBorderInternal} />
                    </div>
                </td>
                <td>
                    State border
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.line} ${styles.municipalityBorder}`}></div>
                </td>
                <td>
                    Municipality border
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.text} ${styles.stateCapital}`}>PINOTEPA</div>
                </td>
                <td>
                    State capital
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.text} ${styles.municipalityCapital}`}>Puerto Marcos</div>
                </td>
                <td>
                    Municipality capital
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.text} ${styles.town}`}>Nuevo Inicio</div>
                </td>
                <td>
                    Other town
                </td>
            </tr>
            <tr>
                <td>
                    <div className={`${styles.text} ${styles.municipalityName}`}>Andujano</div>
                </td>
                <td>
                    Municipality name
                </td>
            </tr>
        </table>
    </details>
);

export default Legend;