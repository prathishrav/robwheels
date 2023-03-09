import React from 'react';

function Contact(props) {
    return (
        <section  className="contact" id="contact">

            <h1  className="heading"><span>contact</span> us</h1>

            <div  className="row">

                <iframe src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d125307.77430894828!2d76.9988557!3d11.048526!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1676111599770!5m2!1sen!2sin" width="400" title='robwheels' height="300" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

                <form action="https://api.staticforms.xyz/submit" method="post">
                    <h3>get in touch</h3>
                    <input type="hidden" name="accessKey" value="3cd096dd-47c7-4ad4-a464-c19ad704c7e4"/>
                    <input type="text" placeholder="your name" name="name"  className="box" />
                    <input type="email" placeholder="your email" name="email" className="box" />
                    <input type="tel" placeholder="subject" name="subject" className="box" />
                    <textarea placeholder="your message" name="message" className="box" cols="30" rows="10"></textarea>
                    <input type="text" name="honeypot" style={{display:"none"}}></input>
                    <input type="hidden" name="replyTo" value="@"/>
                    <input type="text" name="replyTo" style={{display:"none"}} value="prathishrav@gmail.com"/>
                    <input type="hidden" name="redirectTo" value="https://example.com/contact/success"></input>
                    <input type="submit" value="send message"  className="btn" />
                </form>

            </div>

        </section>
    );
}

export default Contact;