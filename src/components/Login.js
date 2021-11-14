import React from "react";
import { Button, Form, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Login = () => {
    return (
    <Card className="mx-auto" style={{ width: '20rem', marginTop: '50px' }}>
        <Card.Header>
        <svg width="277" height="61" viewBox="0 0 277 61" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M30.135 40.8401H29.815C29.4737 43.1014 28.3217 44.9788 26.359 46.4721C24.3963 47.9654 21.7297 48.7121 18.359 48.7121C15.799 48.7121 13.4097 48.2214 11.191 47.2401C8.97234 46.2588 7.03101 44.8081 5.36701 42.8881C3.70301 40.9681 2.40168 38.5788 1.46301 35.7201C0.524344 32.8614 0.055011 29.5548 0.055011 25.8001C0.055011 22.0454 0.545678 18.7174 1.52701 15.8161C2.50834 12.9148 3.87368 10.4828 5.62301 8.52009C7.41501 6.55742 9.54834 5.06409 12.023 4.04009C14.4977 3.01609 17.2497 2.50409 20.279 2.50409C24.2897 2.50409 27.7457 3.37876 30.647 5.12809C33.5483 6.83476 35.831 9.41609 37.495 12.8721L29.559 17.4161C28.8763 15.6668 27.8097 14.1948 26.359 13.0001C24.9083 11.7628 22.8817 11.1441 20.279 11.1441C17.2497 11.1441 14.839 12.0188 13.047 13.7681C11.255 15.5174 10.359 18.2694 10.359 22.0241V29.1921C10.359 32.9041 11.255 35.6561 13.047 37.4481C14.839 39.1974 17.2497 40.0721 20.279 40.0721C21.4737 40.0721 22.6043 39.9441 23.671 39.6881C24.7377 39.3894 25.6763 38.9628 26.487 38.4081C27.2977 37.8108 27.9163 37.1068 28.343 36.2961C28.8123 35.4854 29.047 34.5254 29.047 33.4161V31.1761H20.727V23.0481H38.327V47.9441H30.135V40.8401ZM57.119 47.9441C53.8763 47.9441 51.487 47.1548 49.951 45.5761C48.4577 43.9974 47.711 41.7148 47.711 38.7281V0.584091H57.183V40.5841H61.407V47.9441H57.119ZM72.262 10.7601C70.342 10.7601 68.934 10.3334 68.038 9.48009C67.1847 8.58409 66.758 7.45342 66.758 6.08809V4.68009C66.758 3.31476 67.1847 2.20542 68.038 1.35209C68.934 0.45609 70.342 0.00809097 72.262 0.00809097C74.182 0.00809097 75.5687 0.45609 76.422 1.35209C77.318 2.20542 77.766 3.31476 77.766 4.68009V6.08809C77.766 7.45342 77.318 8.58409 76.422 9.48009C75.5687 10.3334 74.182 10.7601 72.262 10.7601ZM67.526 14.3441H76.998V47.9441H67.526V14.3441ZM99.8465 48.7121C97.3292 48.7121 95.0892 48.3068 93.1265 47.4961C91.1638 46.6428 89.5212 45.4694 88.1985 43.9761C86.8758 42.4401 85.8732 40.5841 85.1905 38.4081C84.5078 36.2321 84.1665 33.8001 84.1665 31.1121C84.1665 28.4241 84.5078 26.0134 85.1905 23.8801C85.8732 21.7041 86.8758 19.8481 88.1985 18.3121C89.5212 16.7761 91.1638 15.6028 93.1265 14.7921C95.0892 13.9814 97.3292 13.5761 99.8465 13.5761C103.26 13.5761 106.097 14.3441 108.359 15.8801C110.663 17.4161 112.305 19.5708 113.287 22.3441L105.607 25.6721C105.308 24.3921 104.689 23.3041 103.751 22.4081C102.812 21.5121 101.511 21.0641 99.8465 21.0641C97.9265 21.0641 96.4758 21.7041 95.4945 22.9841C94.5132 24.2214 94.0225 25.9068 94.0225 28.0401V34.3121C94.0225 36.4454 94.5132 38.1308 95.4945 39.3681C96.4758 40.6054 97.9265 41.2241 99.8465 41.2241C101.553 41.2241 102.897 40.7761 103.879 39.8801C104.903 38.9414 105.649 37.7254 106.119 36.2321L113.479 39.4321C112.369 42.6321 110.641 44.9788 108.295 46.4721C105.991 47.9654 103.175 48.7121 99.8465 48.7121Z" fill="#9C26B0"/>
<path d="M120.293 3.27209H137.125C140.069 3.27209 142.757 3.74142 145.189 4.68009C147.621 5.61876 149.69 7.02676 151.397 8.90409C153.104 10.7388 154.426 13.0641 155.365 15.8801C156.304 18.6534 156.773 21.8961 156.773 25.6081C156.773 29.3201 156.304 32.5841 155.365 35.4001C154.426 38.1734 153.104 40.4988 151.397 42.3761C149.69 44.2108 147.621 45.5974 145.189 46.5361C142.757 47.4748 140.069 47.9441 137.125 47.9441H120.293V3.27209ZM137.125 39.3041C140.026 39.3041 142.309 38.4934 143.973 36.8721C145.637 35.2508 146.469 32.6481 146.469 29.0641V22.1521C146.469 18.5681 145.637 15.9654 143.973 14.3441C142.309 12.7228 140.026 11.9121 137.125 11.9121H130.021V39.3041H137.125ZM169.582 10.7601C167.662 10.7601 166.254 10.3334 165.358 9.48009C164.505 8.58409 164.078 7.45342 164.078 6.08809V4.68009C164.078 3.31476 164.505 2.20542 165.358 1.35209C166.254 0.45609 167.662 0.00809097 169.582 0.00809097C171.502 0.00809097 172.889 0.45609 173.742 1.35209C174.638 2.20542 175.086 3.31476 175.086 4.68009V6.08809C175.086 7.45342 174.638 8.58409 173.742 9.48009C172.889 10.3334 171.502 10.7601 169.582 10.7601ZM164.846 14.3441H174.318V47.9441H164.846V14.3441ZM208.431 47.9441C206.724 47.9441 205.295 47.4108 204.143 46.3441C203.033 45.2774 202.329 43.8481 202.031 42.0561H201.647C201.135 44.2321 200.004 45.8961 198.255 47.0481C196.505 48.1574 194.351 48.7121 191.791 48.7121C188.42 48.7121 185.839 47.8161 184.047 46.0241C182.255 44.2321 181.359 41.8641 181.359 38.9201C181.359 35.3788 182.639 32.7548 185.199 31.0481C187.801 29.2988 191.321 28.4241 195.759 28.4241H201.071V26.3121C201.071 24.6908 200.644 23.4108 199.791 22.4721C198.937 21.4908 197.508 21.0001 195.503 21.0001C193.625 21.0001 192.132 21.4054 191.023 22.2161C189.913 23.0268 188.996 23.9441 188.271 24.9681L182.639 19.9761C184.004 17.9708 185.711 16.4134 187.759 15.3041C189.849 14.1521 192.665 13.5761 196.207 13.5761C200.985 13.5761 204.569 14.6214 206.959 16.7121C209.348 18.8028 210.543 21.8534 210.543 25.8641V40.5841H213.679V47.9441H208.431ZM195.311 42.1201C196.889 42.1201 198.233 41.7788 199.343 41.0961C200.495 40.4134 201.071 39.3041 201.071 37.7681V33.8001H196.463C192.751 33.8001 190.895 35.0588 190.895 37.5761V38.5361C190.895 39.7734 191.279 40.6908 192.047 41.2881C192.815 41.8428 193.903 42.1201 195.311 42.1201ZM220.476 47.9441V14.3441H229.948V21.6401H230.268C230.439 20.7014 230.737 19.8054 231.164 18.9521C231.591 18.0561 232.145 17.2668 232.828 16.5841C233.553 15.9014 234.407 15.3681 235.388 14.9841C236.369 14.5574 237.521 14.3441 238.844 14.3441H240.508V23.1761H238.14C235.367 23.1761 233.297 23.5388 231.932 24.2641C230.609 24.9894 229.948 26.3334 229.948 28.2961V47.9441H220.476ZM267.773 14.3441H276.605L263.677 53.1281C262.823 55.7308 261.607 57.6508 260.029 58.8881C258.493 60.1254 256.274 60.7441 253.373 60.7441H247.485V53.3841H253.821L254.973 49.6721L243.197 14.3441H252.605L257.533 30.0241L259.965 39.7521H260.349L262.845 30.0241L267.773 14.3441Z" fill="#FE2472"/>
</svg>

        </Card.Header>
        <Card.Body>
            <Form>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Email"/>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Contraseña</Form.Label>
                    <Form.Control type="password" placeholder="Contraseña"/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Label>¿No estas registrado? <Link to="/reg">registrate aquí</Link></Form.Label>            
                </Form.Group>
                <div className="text-center">
                <Link to="/home"><Button variant="primary" type="submit">
                    Iniciar Sesión
                </Button></Link>
                
                </div>
                
            </Form>
        </Card.Body>
    </Card>
    );
}
export default Login;
