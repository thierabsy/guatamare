export const successMsg = (res) =>{
    this.setState({
        posted: true
    })
    setTimeout(() => {
        this.setState({
            posted: false
        })
    }, 5000)
}
export const failMsg = (e) =>{
    this.setState({
        error: true
    })
    setTimeout(() => {
        this.setState({
            error: false
        })
    }, 5000)
}