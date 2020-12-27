import React from 'react'

class ButtonsShow extends React.Component{
    onShow = (data) =>{
        this.props.onShow(data);
    }
    render() {
        return (
            <div className= "buttons-show">
                <button onClick = {this.props.onShow("All")}>All</button> 
                <button onClick = {this.props.onShow("Incomplete")}>Incomplete</button> 
                <button onClick = {this.props.onShow("Complete")}>Complete</button> 
            </div>
        )
    }
}

export default ButtonsShow
// đây là component con
//  z có cách nào truyền dữ liệu từ cpn con sang cha k 
// này la truyền dữ liệu từ con sang cha.. thì lợi truyền qua 1 func.. bỏ tham số cần truyền vào đó r qa thằng cha nhận lại

// đâu, coi code thử nè coi đúng k 