import "./testimonials.scss"
import {Twitter, YouTube, Instagram, ArrowDropDownCircleRounded} from "@material-ui/icons"

export default function Testimonials(){

    const data = [
        {
            id : "1",
            description : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis inventore voluptatibus porro consequatur, excepturi",
            naame : "Gaurav Mishra",
            Designation : "Software Engineer",
            imgAdd : "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
        },
        {
            id : "2",
            description : " ipsum voluptas expedita obcaecati iusto, nihil ut. Voluptatem, mollitia. consectetur adipisicing elit. ",
            naame : "Samarth Sahu",
            Designation : "Blockchain developer",
            featured : "true",
            imgAdd : "https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
        },
        {
            id : "3",
            description : "quibusdam praesentium non, nobis harum necessitatibus vero . Debitis inventore voluptatibus porro consequatur, excepturi",
            naame : "Pallavi Mishra",
            Designation : "Bank Manager",
            imgAdd : "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=386&q=80"

        }
    ]

    return(
        <div className="testimonials" id="testimonials">
            <h1>Testimonials</h1>
            <div className="containers">
                {data.map((items)=>(
                    <div className={items.featured ? "card featured" : "card"}>
                    <div className="top">
                        <ArrowDropDownCircleRounded className="arrowLeft"/>
                        <img src={items.imgAdd} alt="" />
                        <Twitter className="arrowRight"/>
                    </div>
                    <div className="center">
                        <p>
                            {items.description}
                        </p>
                    </div>
                    <div className="buttom">
                        <h3>{items.naame}</h3>
                        <h4>{items.Designation}</h4>
                    </div>
                </div>
                ))}
            </div>
        </div>
        )
}