
<template>
    <section class="container">
        <form>
            <div class="row">
                <div class="input-field">
                    <input
                        type="text"
                        id="text"
                        class="validate"
                    >
                    <label for="text">text</label>
                </div>
            </div>

            <div class="row">
                <div class="input-field">
                    <textarea 
                        id="textarea"
                        class="materialize-textarea"
                    >
                    </textarea>
                    <label for="textarea">textarea</label>
                </div>
            </div>

            <div class="row">
                <label>
                    <input type="checkbox" id="checkbox" class="filled-in">
                    <span>
                        checkbox
                    </span>
                </label>
            </div>

            <div class="row">
                <div class="switch col s6 offset-s1 center-align">
                    <label>
                        <input
                            type="checkbox"
                            name="switch"
                        >
                        <span class="lever"></span>
                        switch
                    </label>
                </div>
            </div>

            <div class="row">
                <div class="col s12">
                    <ul class="tabs">
                        <li class="tab col s4"><a
                            href="javascript:void(0)"
                            class="active"
                        >tab</a></li>
                        <li class="tab col s4"><a
                            href="javascript:void(0)"
                        >tab</a></li>
                        <li class="tab col s4"><a
                            href="javascript:void(0)"
                        >tab</a></li>
                    </ul>
                </div>
            </div>
        </form>
    </section>
</template>

<script>
export default {
    
    mounted () {
        const tabElems = document.querySelectorAll('.tabs')
        const tabOptions = []
        const tabInstances = M.Tabs.init(tabElems, tabOptions)
    }
}

</script>

<style lang="scss" scoped>

.input-field {
    input {
        &:focus + label {
            color: blue !important;
        }

        &:focus {
            border-bottom: 1px solid blue !important;
            box-shadow: 0 1px 0 0 blue !important;
        }
    }

    input.valid:not(.browser-default) {
        border-bottom: 1px solid blue !important;
        box-shadow: 0 1px 0 0 blue !important;
    }

    textarea {
        &:focus + label {
            color: blue !important;
        }

        &:focus {
            border-bottom: 1px solid blue !important;
            box-shadow: 0 1px 0 0 blue !important;
        }
    }

    textarea.valid:not(.browser-default) {
        border-bottom: 1px solid blue !important;
        box-shadow: 0 1px 0 0 blue !important;
    }
}

input[type=checkbox].filled-in:checked+span:not(.lever):after {
    border: 2px solid blue;
    background-color: blue;
}

.switch {
    label input[type=checkbox]:checked + .lever {
        background-color: #77BEF5;
    }
    input[type=checkbox]:checked + .lever:after {
        background-color: blue !important;
    }
    input[type=checkbox]:checked:not(:disabled) ~ .lever:active::before, input[type=checkbox]:checked:not(:disabled).tabbed:focus ~ .lever::before {
        background-color: rgba($color: blue, $alpha: 0.1)
    }
}

.tabs .tab a {
    color: rgba($color: blue, $alpha: 0.7)
}
.tabs .tab a:hover, .tabs .tab a.active {
    color: blue;
    font-weight: bold;
    transition: font-weight 0.2s;
}
.tabs .tab a:focus, .tabs .tab a:focus.active {
    background-color: rgba($color: blue, $alpha: 0.2)
}
.tabs .indicator {
    background-color: rgba($color: blue, $alpha: 0.7)
}

</style>

