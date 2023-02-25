import { Stage, Layer, Rect } from 'react-konva';

const Mosaic2Canvas: React.FC = () => {
    return (
        <Stage width={200} height={200}>
            <Layer>
                <Rect width={50} height={50} fill="red" />
            </Layer>
        </Stage>
    )
};

export default Mosaic2Canvas;