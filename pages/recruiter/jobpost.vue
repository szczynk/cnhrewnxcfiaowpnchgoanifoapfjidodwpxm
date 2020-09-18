<template>
    <div id="app">
        <navbar/>
        <div class="container jobform">
            <h2 class="text-left">What job do you want to post?</h2>
            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="row my-2 ">
                <b-form-group id="input-group-1" label="Company:" label-for="input-1" class="col-3 text-left">
                    <b-form-input id="input-1" v-model="form.company" required placeholder="Company">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-2" label="Job Title:" label-for="input-2" class="col-3 text-left">
                    <b-form-input id="input-1" v-model="form.jobtitle" required placeholder="Job Title">
                    </b-form-input>
                </b-form-group>

                <b-form-group id="input-group-3" label="Location" label-for="input-3" class="col-3 text-left">
                    <b-form-input id="input-1" v-model="form.location" required placeholder="Location">
                    </b-form-input>
                </b-form-group>
            </b-form>

            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="row my-2 ">
                <b-form-group id="employment-type" label="Employment Type:" label-for="input-3" class="col-3 text-left">
                    <b-form-select
                    id="employment"
                    v-model="form.employment"
                    :options="employment"
                    required
                    ></b-form-select>
                </b-form-group>

                <div class="col-6 text-left">
                    <label class="typo__label">Job Function (Select up to 3):</label>
                    <multiselect v-model="jobfunctselected" tag-placeholder="Add this as new tag" placeholder="Search or add a job function" label="name" track-by="code" :options="jobfunction" :multiple="true" :taggable="true" @tag="addTagJobfunct"></multiselect>
                </div>
            </b-form>

            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="row my-2">
                <b-form-group id="seniority-type" label="Seniority Type:" label-for="input-4" class="col-3 text-left">
                    <b-form-select
                    id="seniority"
                    v-model="form.seniority"
                    :options="seniority"
                    required
                    ></b-form-select>
                </b-form-group>

                <div class="col-6 text-left">
                    <label class="typo__label">Company Industry (Select up to 3):</label>
                    <multiselect v-model="industryselected" tag-placeholder="Add new industry" placeholder="Search or add your company industry" label="name" track-by="code" :options="industry" :multiple="true" :taggable="true" @tag="addTagIndustry"></multiselect>
                </div>
            </b-form>

            <!--rich text editor-->
            <div class="row">
                <div class="col-9 rich-text">
                    <h6>Job Description</h6>
                    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
                        <button :class="{ 'is-active': isActive.bold() }" @click="commands.bold">
                            <i class="fa fa-bold" aria-hidden="true"></i>
                        </button>
                    </editor-menu-bar>
                    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
                        <button :class="{ 'is-active': isActive.italic() }" @click="commands.italic">
                            <i class="fa fa-italic" aria-hidden="true"></i>
                        </button>
                    </editor-menu-bar>
                    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
                        <button :class="{ 'is-active': isActive.underline() }" @click="commands.underline">
                            <i class="fa fa-underline" aria-hidden="true"></i>
                        </button>
                    </editor-menu-bar>
                    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
                        <button :class="{ 'is-active': isActive.bullet_list() }" @click="commands.bullet_list">
                            <i class="fa fa-list-ul" aria-hidden="true"></i>
                        </button>
                    </editor-menu-bar>
                    <editor-menu-bar :editor="editor" v-slot="{ commands, isActive }">
                        <button :class="{ 'is-active': isActive.ordered_list() }" @click="commands.ordered_list">
                            <i class="fa fa-list-ol" aria-hidden="true"></i>
                        </button>
                    </editor-menu-bar>
                
                    <editor-content :editor="editor" />
                </div>
            </div>
            <!--rich text editor-->

            <b-form @submit="onSubmit" @reset="onReset" v-if="show" class="row my-4">
                <div class="col-12 text-left">
                    <label class="typo__label">Job Skill Requirement: (Select up to 3):</label>
                    <h6>Add skill keywords to make your job more visible to the right candidates (Select up to 10)</h6>
                    <multiselect v-model="skillselected" tag-placeholder="Add new needed skill" placeholder="Search or add your job skill requirement" label="name" track-by="code" :options="skill" :multiple="true" :taggable="true" @tag="addTagSkill"></multiselect>
                </div>
            </b-form>
            <div class="row button-row my-3">
                <div class="container">
                    <b-button type="submit" variant="primary">Submit</b-button>
                    <b-button type="reset" variant="danger">Reset</b-button>
                </div>
            </div>

        </div>
        <sectionFooter/>
    </div>
</template>

<script>
import Vue from 'vue'
import navbar from '../../components/recruiter/navbar.vue'
import sectionFooter from '../../components/footer.vue'

//For Multiselect
import Multiselect from 'vue-multiselect'

// For Rich-text editor
import { Editor, EditorContent, EditorMenuBar } from 'tiptap'
import {
  Blockquote,
  CodeBlock,
  HardBreak,
  Heading,
  OrderedList,
  BulletList,
  ListItem,
  TodoItem,
  TodoList,
  Bold,
  Code,
  Italic,
  Link,
  Strike,
  Underline,
  History
} from 'tiptap-extensions'

Vue.component('multiselect', Multiselect)


export default {
    name: 'App',
    components: {
        navbar,
        Multiselect,
        Editor,
        EditorContent,
        EditorMenuBar,
        sectionFooter
    },

    data() {
        return {
            editor: null,
            form: {
                company: '',
                jobtitle: '',
                location: ''
            },
            employment: ['Choose one..','Full-time', 'Part-Time', 'Contract', 'Temporary', 'Volunteer', 'Internship'],
            seniority: ['Choose one..', 'Internship', 'Entry Level', 'Associate', 'Mid-senior Level', 'Director', 'Executive'],
            jobfunctselected: [],
            jobfunction: [
                { name: 'Accounting', code: 'acc' },
                { name: 'Administrative', code: 'admin' },
                { name: 'Advertising', code: 'ad' }
            ],
            industryselected: [],
            industry: [
                { name: 'Accounting', code: 'acc' },
                { name: 'Airlines', code: 'air' },
            ],
            skillselected: [],
            skill: [
                { name: 'Programming', code: 'pro' },
                { name: 'Python', code: 'py' },
            ],
            show: true
        }
    },

    mounted() {
        this.editor = new Editor({
            extensions: [
                new Blockquote(),
                new CodeBlock(),
                new HardBreak(),
                new Heading({ levels: [1, 2, 3] }),
                new BulletList(),
                new OrderedList(),
                new ListItem(),
                new TodoItem(),
                new TodoList(),
                new Bold(),
                new Code(),
                new Italic(),
                new Link(),
                new Strike(),
                new Underline(),
                new History(),
            ],
            content: '<p>Add your job description..</p>',
        })
    },

    beforeDestroy() {
        this.editor.destroy()
    },
    
    methods: {
        onSubmit(evt) {
            evt.preventDefault()
            alert(JSON.stringify(this.form))
        },
        onReset(evt) {
            evt.preventDefault()
            // Reset our form values
            this.form.company = ''
            this.form.jobtitle = ''
            this.form.location = ''
            // Trick to reset/clear native browser form validation state
            this.show = false
            this.$nextTick(() => {
                this.show = true
            })
        },
        
        //Nambahin tag baru
        addTagJobfunct (newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.jobfunctselected.push(tag)
            this.jobfunction.push(tag)
        },

        addTagIndustry (newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.industryselected.push(tag)
            this.industry.push(tag)
        },


        addTagSkill (newTag) {
            const tag = {
                name: newTag,
                code: newTag.substring(0, 2) + Math.floor((Math.random() * 10000000))
            }
            this.skillselected.push(tag)
            this.skill.push(tag)
        }
    }
}
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

.navbar-light { 
    border-bottom: none;

    .navbar-nav {
        margin-right: 90px;
        .nav-link {
            font-size: 1rem;
            color: #fff !important;

            &:hover {
                font-weight: bold;
            }
        }
    }
}

.jobform {
    padding: 16px 24px;
    margin-top: 100px;
    margin-bottom: 30px;
    border: 1px solid #ADADAD;
    box-shadow:
    0 2.8px 2.2px rgba(0, 0, 0, 0.034),
    0 6.7px 5.3px rgba(0, 0, 0, 0.048),
    0 12.5px 10px rgba(0, 0, 0, 0.06),
    0 22.3px 17.9px rgba(0, 0, 0, 0.072),
    0 41.8px 33.4px rgba(0, 0, 0, 0.086),
    0 100px 80px rgba(0, 0, 0, 0.12)
    ;

    h2 {
        margin-top: 12px;
        margin-bottom: 24px;
    }
}

.rich-text {
    text-align: left;
    h6 {
        margin-bottom: 0.5rem;
    }
    button {
        border: 0;
        margin-bottom: 10px;
    }
    i {
        font-size: 12px;
    }
}

.ProseMirror {
    padding: 20px;
    min-height: 300px;
    border: 1px solid #ADADAD;
    border-radius: 4px;
    margin-bottom: 30px;

    p {
        margin-bottom: 3px;
    }
}

.ProseMirror-focused {
    border: 0;
}

.button-row {
    border-top: 1px solid #ADADAD;
    

    .container {
        margin-top: 30px;
    }
}

</style>

<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
