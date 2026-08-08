import "./Badge.css";

export default function Badge({

    children,

    icon,

    variant="purple"

}){

    return(

        <div className={`badge ${variant}`}>

            {icon &&

                <span className="badge-icon">

                    {icon}

                </span>

            }

            <span>

                {children}

            </span>

        </div>

    );

}