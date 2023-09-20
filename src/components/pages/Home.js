import React from 'react';
import { useEffect,useState, useRef } from 'react';
import { db } from '../../DataManager';

import '../../App.css';
import ProgressBar from '../ProgressBar';


function round(num, decimalPlaces = 0) {
    num = Math.round(num + "e" + decimalPlaces);
    return Number(num + "e" + -decimalPlaces);
}


function Home() {

    const [progress, setProgress] = useState(0.0);
    const timer = useRef();
    const current = useRef(0.0)
    const [sold, setSold] = useState(0);

    db.ref("Customers").get().then((snapshot)=>{
        const ticketData = snapshot.val();
        var cnt = json2array(ticketData)
        setSold(cnt);
    })

    const json2array = (json)=>{
        var cnt = 0;
        var keys = Object.keys(json);
    
        keys.forEach(function(key){
            cnt+=1;
        });
        
        return cnt;
    }

        useEffect(
            () => {

                timer.current = setInterval(
                    () => {
                        setProgress((prev) => round(prev+0.1,2))
                        current.current += 0.1;
                        //console.log("Curr "+current.current+" Perc "+(sold*100)/30000);
                        if(current.current >= (sold*100)/30000)
                            clearInterval(timer.current)
                        
                }
                ,0.1);
                
                return () => {
                    clearInterval(timer.current);
                }    
                
            }, [sold]
        );

        

        return (
            <>
                <ProgressBar percent={progress>100?100:progress}/>
            </>
        )
    }


export default Home;