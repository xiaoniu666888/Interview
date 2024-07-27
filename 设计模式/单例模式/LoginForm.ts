class LoginForm {
    private state: 'hide' | 'show' = 'hide'
    private constructor() { }

    show() {
        if (this.state === 'show') {
            console.log('show')
            return
        }
        console.log('显示')
        this.state = 'show'
    }

    hide() {
        if (this.state === 'hide') {
            console.log('hide')
            return
        }
        console.log('隐藏')
        this.state = 'hide'
    }

    // ts中才有private
    private static instance: LoginForm | null = null
    static getInstance(): LoginForm {
        // static静态中 this === LoginForm
        if (this.instance == null) {
            this.instance = new LoginForm()
        }
        return this.instance
    }
}

const loginForm1 = LoginForm.getInstance()
const loginForm2 = LoginForm.getInstance()

console.log(loginForm1 === loginForm2)