import React, { useState } from "react"
import "./Image.css";

function Image() {
    const [imgList, setImgList] = useState([
        { width: 900, height: 400 }
    ]);

    const addElement = () => {
        setImgList([...imgList, { width: 900, height: 400 }])
    }

    const removeElement = () => {
        const list = [...imgList];
        list.splice(list.length - 1);
        setImgList(list);
    }

    const increaseImgSize = () => {
        const list = [...imgList];
        const lastImg = list[imgList.length - 1];
        if (lastImg.height < 600) {
            lastImg.height += 100;
            lastImg.width += 220;
        }
        setImgList(list);
    }

    const reduceImgSize = () => {
        const list = [...imgList];
        const lastImg = list[imgList.length - 1];
        if (lastImg.height > 100) {
            lastImg.height -= 100;
            lastImg.width -= 220;
        }
        setImgList(list);
    }

    return (
        <div>
            <div className="img-container">
                {imgList.map((img, index) => (
                    <img key={index} className="VolodumurImg" src="https://f.discover.ua/city/99/Id9Et.jpg"
                         width={img.width} height={img.height} alt="Volodymyr city" />
                ))}
            </div>
            <button id="reduceImgSize" onClick={reduceImgSize}>Reduce</button>
            <button id="increaseImgSize" onClick={increaseImgSize}>Increase</button>
            <button id="addImg" onClick={addElement}>Add</button>
            <button id="removeImg" onClick={removeElement}>Remove</button>
            <br/><br/>

            <a href="https://discover.ua/en/destinations/volyn-region-region/volodimir-volinskiy">Володимир</a><br/>
        </div>
    )
}


export default Image;
