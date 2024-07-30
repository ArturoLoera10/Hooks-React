import { useLayoutEffect, useRef, useState } from "react";

export const PokemonCard = ({ id, name, sprites = [] }) => {
    const pRef = useRef();
    const [boxSize, setboxSize] = useState({ width: 0, height: 0 });

    useLayoutEffect(() => {
        const { width, height } = pRef.current.getBoundingClientRect();

        setboxSize({ width, height });
    }, [id]);

    return (
        <section style={{ height: 200 }}>
            <h2 ref={pRef} className="text-capitalize">
                #{id} - {name}
            </h2>

            {/* Imagenes */}
            <div>
                {sprites.map((sprite) => (
                    <img key={sprite} src={sprite} alt={name} />
                ))}
            </div>
        </section>
    );
};
