module.exports = {
    board_env: "STM32F103RE_creality",
    active: true,
    min_version: "2.1.2",
    meta: {
        stable_name: "ender_3_4.2.7-{{marlin_version}}-{{uid}}",
        nightly_name: "ender_3_4.2.7-{{current_date}}-{{uid}}"
    },
    based_on: {
        repo: "https://github.com/MarlinFirmware/Configurations/",
        path: "/config/examples/Creality/Ender-3/CrealityV422/",
        stable_branch: "release-{{marlin_version}}",
        nightly_branch: "bugfix-2.1.x"
    },
    configuration: {
        enable: [
            //standard leveling menu helper
            ["GRID_MAX_POINTS_X",7
        ],
        disable: []
    },
    configuration_adv: {
        enable: [
            //octoprint
            "HOST_ACTION_COMMANDS"
        ],
        disable: []
    }
};
