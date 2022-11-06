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
            <div className='chore-list'>
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
