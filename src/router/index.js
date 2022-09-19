import Vue from 'vue'
import VueRouter from 'vue-router'
import Layout from '@/views/layout'
import OnsiteRegistration from '@/views/registration/onsite_registration.vue'
import RegistrationRecord from '@/views/registration/registration_record.vue'
import ExpenseCharge from '@/views/registration/expense_charge.vue'
import ExpenseRefund from '@/views/registration/expense_refund.vue'
import ExpenseManage from '@/views/registration/expense_manage.vue'

import PhysicianPatient from '@/views/physician/physician_patient.vue'
import ExpenseQuery from '@/views/physician/expense_query.vue'
import HomeMedicalRecord from '@/views/physician/patient/home_medical_record'
import CheckRequest from '@/views/physician/patient/check_request'
import InspectionRequest  from '@/views/physician/patient/inspection_request'
import PhysicianHistory from '@/views/physician/patient/physician_history'
import CheckResults from '@/views/physician/patient/check_results'
import InspectionResults from '@/views/physician/patient/inspection_results'
import OutpatientDiagnosis from '@/views/physician/patient/outpatient_diagnosis'
import WritePrescription from '@/views/physician/patient/write_prescription'
import DisposalRequest from '@/views/physician/patient/disposal_request'

import CheckApply from '@/views/check/check_apply'
import CheckPatient from '@/views/check/check-patient'
import CheckInput from '@/views/check/check_input'
import CheckManage from '@/views/check/check-manage'

import InspectionApply from '@/views/inspection/inspection_apply'
import InspectionPatient from '@/views/inspection/inspection_patient'
import InspectionInput from '@/views/inspection/inspection_input'
import InspectionManage from '@/views/inspection/inspection_manage'

import GiveMedicine from '@/views/drugstore/give_medicine'
import DrugMedicine from '@/views/drugstore/drug_medicine'
import DrugStorage from '@/views/drugstore/drug_storage'
import TranHistory from '@/views/drugstore/tran_history'

import DisposalApply from '@/views/disposal/disposal_apply'
import DisposalPatient from '@/views/disposal/disposal_patient'
import DisposalInput from '@/views/disposal/disposal_input'
import DisposalManage from '@/views/disposal/disposal_manage'

Vue.use(VueRouter)

const routes = [
  // {
  //   path: '/',
  //   name: 'Layout',
  //   component: Layout
  // },
  {
    path: '/',
    name: '挂号收费',
    component: Layout,
    iconCls:"el-icon-document",
    children: [
      {
        path: '/onsite_registration',
        name: '窗口挂号',
        component: OnsiteRegistration
      },
      {
        path: '/registration_record',
        name: '窗口退号',
        component: RegistrationRecord
      },
      {
        path: '/expense_charge',
        name: '收费',
        component: ExpenseCharge
      },
      {
        path: '/expense_refund',
        name: '退费',
        component: ExpenseRefund
      },
      {
        path: '/expense_manage',
        name: '费用记录查看',
        component: ExpenseManage
      },
    ]
  },
  {
    path: '/',
    name: '门诊医生',
    component: Layout,
    iconCls:"el-icon-user",
    children: [
      {
        path: '/physician_patient',
        name: '患者查看',
        component: PhysicianPatient
      },
      {
        path: '/expense_query',
        name: '费用查询',
        component: ExpenseQuery
      },
    ]
  },
  {
    path: '/',
    name: '检查管理',
    component: Layout,
    iconCls:"el-icon-camera",
    children: [
      {
        path: '/check_apply',
        name: '检查申请',
        component: CheckApply
      },
      {
        path: '/check-patient',
        name: '患者录入',
        component: CheckPatient
      },
      {
        path: '/check-input',
        name: '结果录入',
        component: CheckInput
      },
      {
        path: '/check-manage',
        name: '检查管理',
        component: CheckManage
      }
    ]
  },
  {
    path: '/',
    name: '检验管理',
    component: Layout,
    iconCls:"el-icon-headset",
    children: [
      {
        path: '/inspection_apply',
        name: '检验申请',
        component: InspectionApply
      },
      {
        path: '/inspection_patient ',
        name: '患者录入',
        component: InspectionPatient
      },
      {
        path: '/inspection_input',
        name: '检验录入',
        component: InspectionInput
      },
      {
        path: '/inspection_manage',
        name: '检验管理',
        component: InspectionManage
      },
    ]
  },
  {
    path: '/',
    name: '药房管理',
    component: Layout,
    iconCls:"el-icon-wallet",
    children: [
      {
        path: '/give_medicine',
        name: '药房发药',
        component: GiveMedicine
      },
      {
        path: '/drug_medicine',
        name: '药房退药',
        component: DrugMedicine
      },
      {
        path: '/drug_storage',
        name: '药库管理',
        component: DrugStorage
      },
      {
        path: '/tran_history',
        name: '交易记录',
        component: TranHistory
      },
    ]
  },
  {
    path: '/',
    name: '处置管理',
    component: Layout,
    iconCls:"el-icon-first-aid-kit",
    children: [
      {
        path: '/disposal_apply',
        name: '处置申请',
        component: DisposalApply
      },
      {
        path: '/disposal_patient',
        name: '患者录入',
        component: DisposalPatient
      },
      {
        path: '/disposal_input',
        name: '处置录入',
        component: DisposalInput
      },
      {
        path: '/disposal_manage',
        name: '处置管理',
        component: DisposalManage
      },
    ]
  },
]

const router = new VueRouter({
  routes
})

export default router
