document.addEventListener('DOMContentLoaded', () => {
    const appliances_list = [
        {name: "Microwave", id: ["deviceName", "isOn", "time2"]},
        {name: "Refrigerator", id: ["deviceName", "isOn"]},
        {name: "Rice Cooker", id: ["deviceName", "isOn"]},
        {name: "Dish Washer", id: ["deviceName", "isOn"]},
        {name: "Robot Vacuum", id: ["deviceName", "isOn"]},
        {name: "Washing Machine", id: ["deviceName", "isOn"]},
        {name: "Dryer", id: ["deviceName", "isOn", "time"]},
        {name: "Air Conditioner", id: ["deviceName", "isOn", "temp"]},
        {name: "Heater", id: ["deviceName", "isOn", "temp3"]},
        {name: "Humidifier", id: ["deviceName", "isOn"]},
        {name: "Fan", id: ["deviceName", "isOn"]},
        {name: "TV", id: ["deviceName", "isOn", "channel", "volume"]},
        {name: "Kettle", id: ["deviceName", "isOn"]},
        {name: "Computer", id: ["deviceName", "isOn"]},
        {name: "Speaker", id: ["deviceName", "isOn", "volume"]},
        {name: "Curtain", id: ["deviceName", "isOpen"]},
        {name: "Lighting", id: ["deviceName", "isOn"]},
        {name: "Oven", id: ["deviceName", "isOn", "time", "temp2"]},
        {name: "Front Door", id: ["deviceName", "isLock"]},
        {name: "Projector", id: ["deviceName", "isOn"]},
    ]

    const device = document.getElementById('device');
    const isOn = document.getElementById('isOn');
    const isOpen = document.getElementById('isOpen');
    const isLock = document.getElementById('isLock');
    const deviceName = document.getElementById('device_name');

    device.addEventListener('change', () => {
        if (device) {
            let id = device.value;
            const button = document.getElementById('submit_button');

            if (id !== 'default') {
                const findAppliance = id => {
                    return appliances_list.find(p => p.name === id).id;
                }

                const appliance_option = findAppliance(id);

                const reset = document.getElementsByClassName('option_item');
                for (let i = 0; i < reset.length; i++) {
                    reset[i].style.display = 'none';
                }

                appliance_option.forEach(element => {
                    document.getElementById('option').style.display = "block";
                    const tag = document.getElementById(element);
                    tag.style.display = "flex";
                    if (tag.getElementsByTagName("input")) {
                        const input = tag.getElementsByTagName("input");
                        for (let i = 0; i < input.length; i++) {
                            input[i].disabled = false;
                        }
                    }
                    if (tag.getElementsByTagName("select")) {
                        const select = tag.getElementsByTagName("select");
                        for (let i = 0; i < select.length; i++) {
                            select[i].disabled = false;
                        }
                    }
                })

                button.style.background = "#F47676";
                button.disabled = false;
            } else {
                document.getElementById('option').style.display = "none";
                button.style.background = "#7c7c7c";
                button.disabled = true;
            }
        }
    });


    isOn.addEventListener('change', () => {
        const isOnTag = isOn.getElementsByTagName("input");
        setValue(isOnTag);
    });
    isOpen.addEventListener('change', () => {
        const isOpentag = isOpen.getElementsByTagName("input");
        setValue(isOpentag);
    });
    isLock.addEventListener('change', () => {
        const isLockTag = isLock.getElementsByTagName("input");
        setValue(isLockTag);
    });

    const setValue = (tag) => {
        const new_arr = Array.from(tag);
        new_arr[0].disabled = new_arr[1].checked;
    }

    document.getElementById('add_device').addEventListener('submit', (e) => {
        if(deviceName.value === ''){
            alert('Please set your device name');
            e.preventDefault();
        }else{
            const elements = this.elements;
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].type === 'submit') {
                    elements[i].disabled = true;
                }
            }
        }
    });
});