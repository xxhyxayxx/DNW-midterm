document.addEventListener('DOMContentLoaded', () => {
    const appliances_list = [
        {name: "Microwave", id: ["deviceName", "is_on", "time2"]},
        {name: "Refrigerator", id: ["deviceName", "is_on"]},
        {name: "Rice Cooker", id: ["deviceName", "is_on"]},
        {name: "Dish Washer", id: ["deviceName", "is_on"]},
        {name: "Robot Vacuum", id: ["deviceName", "is_on"]},
        {name: "Washing Machine", id: ["deviceName", "is_on"]},
        {name: "Dryer", id: ["deviceName", "is_on", "time"]},
        {name: "Air Conditioner", id: ["deviceName", "is_on", "temp"]},
        {name: "Heater", id: ["deviceName", "is_on", "temp3"]},
        {name: "Humidifier", id: ["deviceName", "is_on"]},
        {name: "Fan", id: ["deviceName", "is_on"]},
        {name: "TV", id: ["deviceName", "is_on", "channel", "volume"]},
        {name: "Kettle", id: ["deviceName", "is_on"]},
        {name: "Computer", id: ["deviceName", "is_on"]},
        {name: "Speaker", id: ["deviceName", "is_on", "volume"]},
        {name: "Curtain", id: ["deviceName", "is_open"]},
        {name: "Lighting", id: ["deviceName", "is_on"]},
        {name: "Oven", id: ["deviceName", "is_on", "time", "temp2"]},
        {name: "Front Door", id: ["deviceName", "is_lock"]},
        {name: "Projector", id: ["deviceName", "is_on"]},
    ]

    const device = document.getElementById('device');
    const isOn = document.getElementById('is_on');
    const isOpen = document.getElementById('is_open');
    const isLock = document.getElementById('is_lock');
    const deviceName = document.getElementById('device_name');

    if (device) {
        let id = device.innerText;
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

    document.getElementById('update_device').addEventListener('submit', (e) => {
        if (deviceName.value === '') {
            alert('Please set your device name');
            e.preventDefault();
        } else {
            const elements = this.elements;
            for (let i = 0; i < elements.length; i++) {
                if (elements[i].type === 'submit') {
                    elements[i].disabled = true;
                }
            }
        }
    });
});