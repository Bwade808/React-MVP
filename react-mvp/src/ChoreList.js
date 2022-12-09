import React, {useState} from 'react';
import Chore from './Chore';
import Header from './Header';

const ChoreList = (props) => {
    let { choreData } = props;
    const [plan, setPlan] = useState(true);
    const [completed, setCompleted] = useState(false);
    const [remaining, setRemaining] = useState(false);
    // console.log('chore list data', choreData)
    const onPlan = () => {
        setPlan(true);
        setCompleted(false);
        setRemaining(false);
        console.log('plan')
    }
    const onCompleted = () => {
        setPlan(false);
        setCompleted(true);
        setRemaining(false);
        console.log('completed')
    }
    const onRemaining = () => {
        setPlan(false);
        setCompleted(false);
        setRemaining(true);
        console.log('remaining')
    }
  return (
    <div>
        <div className='chore-list-container'>
            <div className='buttons'>
                <button onClick={onPlan} id='plan' className='list-btn'>Chore Plan</button>
                <button onClick={onCompleted} id='completed' className='list-btn'>Completed</button>
                <button onClick={onRemaining} id='remaining' className='list-btn'>Remaining</button>
            </div>
            <div className='chore-list-container'>
                
                {plan && <NotCompletedList choreData={choreData} />}
                {completed && <CompletedList choreData={choreData} />}
                {remaining && <RemainingList choreData={choreData} />}
                {/* {choreData.map(chore => {
                        return <Chore key={chore.id} choreObj={chore} />
                    })
                } */}
            </div>
        </div>
    </div>
    
  )
}

const NotCompletedList = (props) => {
    let { choreData } = props;
    return (
        <div className='chore-list'>
            <div className='disclaimer'>***Disclaimer: The 'Done' checkbox functionality is currently not operational.  I'm working
            very hard to get these bugs resolved.  Thank you for your patience.***</div>
            <div className='note'>***Note: If you complete a chore, please use the delete button to remove it from 
            your current list.  And parents...don't forget to pay your child!***  </div>
            {choreData.map(chore => {
            return <Chore key={chore.id} choreObj={chore} />
            })}
        </div>
    )
}

const CompletedList = (props) => {
    let { choreData } = props;
    return (
        <div className='chore-list'>
            {choreData.map(chore => {
            if(chore.isdone){
                return <Chore key={chore.id} choreObj={chore} />
            }
            })}
        </div>
    )
}

const RemainingList = (props) => {
    let { choreData } = props;
    return (
        <div className='chore-list'>
            {choreData.map(chore => {
            if(!chore.isdone){
                return <Chore key={chore.id} choreObj={chore} />
            }
        })}
        </div>
    )
}

export default ChoreList
