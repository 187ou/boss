// src/sections/offer-compare/components/OfferInput.jsx
import React from "react";
import {
  Card, Button, Form, Input, Upload, Tag
} from "antd";
import {
  PlusOutlined, UploadOutlined, DeleteOutlined, EditOutlined
} from "@ant-design/icons";
import { Typography } from "antd";

const { Title, Text } = Typography;
const { Item } = Form;
const { TextArea } = Input;

const OfferInput = ({
                      offers,
                      activeOfferId,
                      form,
                      onAddOffer,
                      onDeleteOffer,
                      onSelectOffer,
                      onSaveOffer
                    }) => {
  return (
    <Card>
      <div className="flex justify-between items-center mb-4">
        <Title level={4} style={{ margin: 0 }}>已添加的Offer</Title>
        <Button type="primary" icon={<PlusOutlined />} onClick={onAddOffer}>
          添加新Offer
        </Button>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {offers.map(offer => (
          <div
            key={offer.id}
            className={`px-3 py-2 rounded border cursor-pointer ${
              activeOfferId === offer.id ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:bg-gray-50'
            }`}
            onClick={() => onSelectOffer(offer.id)}
          >
            <Text strong>{offer.company}</Text>
            <Tag className="ml-2">{offer.position || '未设置'}</Tag>
            {activeOfferId === offer.id && (
              <Button
                type="text"
                icon={<DeleteOutlined />}
                size="small"
                className="ml-2 text-red-500"
                onClick={(e) => {
                  e.stopPropagation();
                  onDeleteOffer(offer.id);
                }}
              />
            )}
          </div>
        ))}
      </div>

      {activeOfferId ? (
        <Form form={form} layout="vertical">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Item name="company" label="公司名称" rules={[{ required: true }]}>
              <Input placeholder="请输入公司名称" />
            </Item>
            <Item name="position" label="岗位名称" rules={[{ required: true }]}>
              <Input placeholder="请输入岗位名称" />
            </Item>

            <Item name="baseSalary" label="基本工资（k/月）" rules={[{ required: true, type: 'number' }]}>
              <Input type="number" placeholder="例如：35" addonAfter="k/月" />
            </Item>
            <Item name="performanceBonus" label="绩效奖金（k/月）" rules={[{ type: 'number' }]}>
              <Input type="number" placeholder="例如：5" addonAfter="k/月" />
            </Item>

            <Item name="yearEndBonus" label="年终奖">
              <Input placeholder="例如：2-4个月薪资" />
            </Item>
            <Item name="insuranceRatio" label="五险一金缴纳比例（%）">
              <Input type="number" placeholder="例如：100" addonAfter="%" />
            </Item>

            <Item name="location" label="工作地点">
              <Input placeholder="例如：北京市朝阳区" />
            </Item>
            <Item name="commuteTime" label="通勤时间（分钟）">
              <Input type="number" placeholder="例如：45" addonAfter="分钟" />
            </Item>
          </div>

          <Item name="responsibilities" label="岗位职责" className="mt-2">
            <TextArea rows={3} placeholder="请描述主要岗位职责" />
          </Item>
          <Item name="promotionMechanism" label="晋升机制" className="mt-2">
            <TextArea rows={2} placeholder="请描述晋升机制" />
          </Item>
          <Item name="benefits" label="福利补贴" className="mt-2">
            <TextArea rows={2} placeholder="请列出福利补贴，用逗号分隔" />
          </Item>

          <div className="mt-4 flex justify-between">
            <Upload
              name="offerFile"
              accept=".pdf,.doc,.docx,.jpg,.png"
              showUploadList={{ showRemoveIcon: true }}
            >
              <Button icon={<UploadOutlined />}>上传Offer文件（自动解析）</Button>
            </Upload>
            <Button type="primary" icon={<EditOutlined />} onClick={onSaveOffer}>
              保存信息
            </Button>
          </div>
        </Form>
      ) : (
        <div className="h-64 flex items-center justify-center border-dashed border-gray-300 rounded">
          <Text type="secondary">请选择或添加一个Offer进行编辑</Text>
        </div>
      )}
    </Card>
  );
};

export default OfferInput;
